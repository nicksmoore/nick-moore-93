import React, { useState, useRef, useCallback } from 'react';
import Lottie from 'lottie-react';
import RecordRTC from 'recordrtc';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mic, Square, Play, Download, RotateCcw, Volume2, Save } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useProfile } from '@/contexts/ProfileContext';

// Simple memoji animation data (you can replace with actual Lottie file)
const memojiAnimationData = {
  "v": "5.7.4",
  "fr": 30,
  "ip": 0,
  "op": 60,
  "w": 200,
  "h": 200,
  "nm": "Memoji Animation",
  "ddd": 0,
  "assets": [],
  "layers": [
    {
      "ddd": 0,
      "ind": 1,
      "ty": 4,
      "nm": "Face",
      "sr": 1,
      "ks": {
        "o": {"a": 0, "k": 100},
        "r": {"a": 1, "k": [
          {"t": 0, "s": [0]},
          {"t": 30, "s": [5]},
          {"t": 60, "s": [0]}
        ]},
        "p": {"a": 0, "k": [100, 100]},
        "a": {"a": 0, "k": [0, 0]},
        "s": {"a": 1, "k": [
          {"t": 0, "s": [100, 100]},
          {"t": 15, "s": [105, 105]},
          {"t": 30, "s": [100, 100]},
          {"t": 45, "s": [105, 105]},
          {"t": 60, "s": [100, 100]}
        ]}
      },
      "ao": 0,
      "shapes": [
        {
          "ty": "gr",
          "it": [
            {
              "ty": "el",
              "p": {"a": 0, "k": [0, 0]},
              "s": {"a": 0, "k": [80, 80]}
            },
            {
              "ty": "fl",
              "c": {"a": 0, "k": [1, 0.8, 0.6, 1]}
            }
          ]
        }
      ],
      "ip": 0,
      "op": 60,
      "st": 0
    }
  ]
};

const VoiceOverMemoji: React.FC = () => {
  const [recording, setRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const recorderRef = useRef<RecordRTC | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const timeIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { saveProfile } = useProfile();

  const startRecording = useCallback(async () => {
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
      setIsAnimating(true);

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
  }, []);

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
    setIsAnimating(false);
    
    if (timeIntervalRef.current) {
      clearInterval(timeIntervalRef.current);
      timeIntervalRef.current = null;
    }

    toast({
      title: "Recording Complete",
      description: "Your memoji voice-over has been recorded!",
    });
  }, [recording]);

  const resetRecording = useCallback(() => {
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
    }
    setAudioUrl(null);
    setRecordingTime(0);
    setIsPlaying(false);
    setIsAnimating(false);
    
    if (timeIntervalRef.current) {
      clearInterval(timeIntervalRef.current);
      timeIntervalRef.current = null;
    }
  }, [audioUrl]);

  const playAudio = useCallback(() => {
    if (audioUrl && audioRef.current) {
      setIsPlaying(true);
      setIsAnimating(true);
      audioRef.current.play();
    }
  }, [audioUrl]);

  const downloadAudio = useCallback(() => {
    if (audioUrl) {
      const a = document.createElement('a');
      a.href = audioUrl;
      a.download = `memoji-voice-over-${Date.now()}.webm`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      
      toast({
        title: "Download Started",
        description: "Your memoji voice-over is being downloaded",
      });
    }
  }, [audioUrl]);

  const saveToProfile = useCallback(() => {
    if (audioUrl) {
      saveProfile({
        type: 'memoji',
        audioUrl,
        title: `Memoji Cover Letter - ${new Date().toLocaleDateString()}`,
      });
      
      toast({
        title: "Saved to Profile!",
        description: "Your memoji cover letter has been saved to your profile",
      });
    }
  }, [audioUrl, saveProfile]);

  return (
    <Card className="w-full max-w-2xl mx-auto glass-effect border-purple-200/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-xl text-amber-300">
          <Mic className="w-6 h-6 text-purple-600" />
          Voice-Over Memoji Cover Letter
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Memoji Animation */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-48 h-48 bg-gradient-to-br from-purple-500/20 to-amber-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
              <Lottie
                animationData={memojiAnimationData}
                loop={isAnimating}
                autoplay={isAnimating}
                className="w-32 h-32"
              />
            </div>
            
            {/* Recording Indicator */}
            {recording && (
              <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                REC {recordingTime}s
              </div>
            )}

            {/* Audio waves animation during recording/playing */}
            {(recording || isPlaying) && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-gradient-to-t from-purple-500 to-amber-500 rounded-full animate-pulse"
                      style={{
                        height: `${Math.random() * 20 + 10}px`,
                        animationDelay: `${i * 0.1}s`,
                        animationDuration: '0.5s'
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        {recording && (
          <div className="w-full">
            <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-amber-500 transition-all duration-1000"
                style={{ width: `${(recordingTime / 30) * 100}%` }}
              />
            </div>
            <div className="text-center text-amber-200 text-sm mt-2">
              {recordingTime}s / 30s
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="flex justify-center gap-4">
          {!recording && !audioUrl && (
            <Button
              onClick={startRecording}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-xl"
            >
              <Mic className="w-5 h-5 mr-2" />
              Start Recording
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

          {audioUrl && (
            <>
              <Button
                onClick={saveToProfile}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl"
              >
                <Save className="w-5 h-5 mr-2" />
                Save to Profile
              </Button>
              <Button
                onClick={playAudio}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl"
              >
                <Play className="w-5 h-5 mr-2" />
                Play Voice-Over
              </Button>
              <Button
                onClick={resetRecording}
                variant="outline"
                className="px-6 py-3 rounded-xl border-purple-400/50 hover:bg-purple-500/10"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Record Again
              </Button>
              <Button
                onClick={downloadAudio}
                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-xl"
              >
                <Download className="w-5 h-5 mr-2" />
                Download
              </Button>
            </>
          )}
        </div>

        {/* Hidden Audio Element */}
        {audioUrl && (
          <audio
            ref={audioRef}
            src={audioUrl}
            onEnded={() => {
              setIsPlaying(false);
              setIsAnimating(false);
            }}
            className="hidden"
          />
        )}

        {/* Instructions */}
        <div className="text-center text-amber-200/80 text-sm space-y-2">
          <p>• Click "Start Recording" to record your voice-over</p>
          <p>• Your memoji will animate while you speak</p>
          <p>• Perfect for a personal introduction with character!</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default VoiceOverMemoji;