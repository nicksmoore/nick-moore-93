import React, { useState, useRef, useCallback } from 'react';
import RecordRTC from 'recordrtc';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, Mic, Square, Play, Download, RotateCcw, Upload, Volume2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const VoiceOverPhoto: React.FC = () => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [recording, setRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const recorderRef = useRef<RecordRTC | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const timeIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePhotoUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast({
          title: "File Too Large",
          description: "Please select an image smaller than 5MB",
        });
        return;
      }

      const url = URL.createObjectURL(file);
      setPhotoUrl(url);
      
      toast({
        title: "Photo Uploaded",
        description: "Now you can record your voice-over!",
      });
    }
  }, []);

  const startRecording = useCallback(async () => {
    if (!photoUrl) {
      toast({
        title: "Upload Photo First",
        description: "Please upload a photo before recording audio",
      });
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      
      recorderRef.current = new RecordRTC(stream, {
        type: 'audio',
        mimeType: 'audio/webm',
        recorderType: RecordRTC.StereoAudioRecorder,
        numberOfAudioChannels: 1,
        desiredSampRate: 16000,
      });

      recorderRef.current.startRecording();
      setRecording(true);
      setRecordingTime(0);

      // Start timer
      timeIntervalRef.current = setInterval(() => {
        setRecordingTime(prev => {
          if (prev >= 30) {
            stopRecording();
            return 30;
          }
          return prev + 1;
        });
      }, 1000);

      toast({
        title: "Recording Started",
        description: "Recording your voice-over for 30 seconds",
      });
    } catch (error) {
      toast({
        title: "Microphone Error",
        description: "Please allow microphone access to record audio",
      });
    }
  }, [photoUrl]);

  const stopRecording = useCallback(() => {
    if (recorderRef.current && recording) {
      recorderRef.current.stopRecording(() => {
        const blob = recorderRef.current?.getBlob();
        if (blob) {
          const url = URL.createObjectURL(blob);
          setAudioUrl(url);
        }
      });
    }

    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }

    setRecording(false);
    
    if (timeIntervalRef.current) {
      clearInterval(timeIntervalRef.current);
      timeIntervalRef.current = null;
    }

    toast({
      title: "Recording Complete",
      description: "Your photo voice-over has been recorded!",
    });
  }, [recording]);

  const resetAll = useCallback(() => {
    if (photoUrl) {
      URL.revokeObjectURL(photoUrl);
    }
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
    }
    
    setPhotoUrl(null);
    setAudioUrl(null);
    setRecordingTime(0);
    setIsPlaying(false);
    
    if (timeIntervalRef.current) {
      clearInterval(timeIntervalRef.current);
      timeIntervalRef.current = null;
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, [photoUrl, audioUrl]);

  const playAudio = useCallback(() => {
    if (audioUrl && audioRef.current) {
      setIsPlaying(true);
      audioRef.current.play();
    }
  }, [audioUrl]);

  const downloadMedia = useCallback(() => {
    if (photoUrl && audioUrl) {
      // Download photo
      const photoA = document.createElement('a');
      photoA.href = photoUrl;
      photoA.download = `cover-letter-photo-${Date.now()}.jpg`;
      document.body.appendChild(photoA);
      photoA.click();
      document.body.removeChild(photoA);

      // Download audio
      setTimeout(() => {
        const audioA = document.createElement('a');
        audioA.href = audioUrl;
        audioA.download = `cover-letter-audio-${Date.now()}.webm`;
        document.body.appendChild(audioA);
        audioA.click();
        document.body.removeChild(audioA);
      }, 500);
      
      toast({
        title: "Download Started",
        description: "Your photo and voice-over are being downloaded",
      });
    }
  }, [photoUrl, audioUrl]);

  return (
    <Card className="w-full max-w-2xl mx-auto glass-effect border-purple-200/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-xl text-amber-300">
          <Camera className="w-6 h-6 text-purple-600" />
          Voice-Over Photo Cover Letter
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Photo Upload/Display */}
        <div className="space-y-4">
          {!photoUrl ? (
            <div className="border-2 border-dashed border-purple-400/50 rounded-xl p-8 text-center hover:border-purple-400/80 transition-colors">
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handlePhotoUpload}
                className="hidden"
              />
              <Camera className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <p className="text-amber-200 mb-4">Upload your professional photo</p>
              <Button
                onClick={() => fileInputRef.current?.click()}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-xl"
              >
                <Upload className="w-5 h-5 mr-2" />
                Choose Photo
              </Button>
            </div>
          ) : (
            <div className="relative">
              <img
                src={photoUrl}
                alt="Cover Letter"
                className="w-full max-h-96 object-cover rounded-xl"
              />
              
              {/* Recording Overlay */}
              {recording && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center">
                  <div className="bg-red-500 text-white px-4 py-2 rounded-full text-lg font-medium mb-4 animate-pulse">
                    🎤 REC {recordingTime}s / 30s
                  </div>
                  
                  {/* Audio Visualizer */}
                  <div className="flex items-center gap-1">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 bg-gradient-to-t from-red-500 to-amber-500 rounded-full animate-pulse"
                        style={{
                          height: `${Math.random() * 30 + 10}px`,
                          animationDelay: `${i * 0.1}s`,
                          animationDuration: '0.6s'
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Playing Overlay */}
              {isPlaying && (
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center">
                  <Volume2 className="w-12 h-12 text-white mb-4 animate-pulse" />
                  <p className="text-white text-lg font-medium">Playing Voice-Over</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Progress Bar */}
        {recording && (
          <div className="w-full">
            <div className="w-full h-3 bg-white/30 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-red-500 to-amber-500 transition-all duration-1000"
                style={{ width: `${(recordingTime / 30) * 100}%` }}
              />
            </div>
            <div className="text-center text-amber-200 text-sm mt-2">
              Recording: {recordingTime}s / 30s
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="flex justify-center gap-4 flex-wrap">
          {photoUrl && !recording && !audioUrl && (
            <Button
              onClick={startRecording}
              className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl"
            >
              <Mic className="w-5 h-5 mr-2" />
              Start Voice-Over
            </Button>
          )}

          {recording && (
            <Button
              onClick={stopRecording}
              className="px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white rounded-xl"
            >
              <Square className="w-5 h-5 mr-2" />
              Stop Recording
            </Button>
          )}

          {photoUrl && audioUrl && (
            <>
              <Button
                onClick={playAudio}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl"
              >
                <Play className="w-5 h-5 mr-2" />
                Play Voice-Over
              </Button>
              <Button
                onClick={downloadMedia}
                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-xl"
              >
                <Download className="w-5 h-5 mr-2" />
                Download All
              </Button>
            </>
          )}

          {(photoUrl || audioUrl) && (
            <Button
              onClick={resetAll}
              variant="outline"
              className="px-6 py-3 rounded-xl border-purple-400/50 hover:bg-purple-500/10"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Start Over
            </Button>
          )}
        </div>

        {/* Hidden Audio Element */}
        {audioUrl && (
          <audio
            ref={audioRef}
            src={audioUrl}
            onEnded={() => setIsPlaying(false)}
            className="hidden"
          />
        )}

        {/* Instructions */}
        <div className="text-center text-amber-200/80 text-sm space-y-2">
          <p>• Upload a professional photo of yourself</p>
          <p>• Record a 30-second voice introduction</p>
          <p>• Perfect for adding a personal touch to your application</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default VoiceOverPhoto;