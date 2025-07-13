import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import RecordRTC from 'recordrtc';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, Square, Play, Download, RotateCcw, Save } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useProfile } from '@/contexts/ProfileContext';

const LiveVideo: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const recorderRef = useRef<RecordRTC | null>(null);
  const [recording, setRecording] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const timeIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const { saveProfile } = useProfile();

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

  const startRecording = useCallback(() => {
    if (!webcamRef.current?.stream) {
      toast({
        title: "Camera Error",
        description: "Please allow camera access to record video",
      });
      return;
    }

    const stream = webcamRef.current.stream;
    recorderRef.current = new RecordRTC(stream, {
      type: 'video',
      mimeType: 'video/webm',
      bitsPerSecond: 128000,
      videoBitsPerSecond: 128000,
      audioBitsPerSecond: 128000,
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
      description: "You have 30 seconds to record your cover letter",
    });
  }, []);

  const stopRecording = useCallback(() => {
    if (recorderRef.current && recording) {
      recorderRef.current.stopRecording(() => {
        const blob = recorderRef.current?.getBlob();
        if (blob) {
          const url = URL.createObjectURL(blob);
          setVideoUrl(url);
        }
      });
    }

    setRecording(false);
    if (timeIntervalRef.current) {
      clearInterval(timeIntervalRef.current);
      timeIntervalRef.current = null;
    }

    toast({
      title: "Recording Complete",
      description: "Your video cover letter has been recorded successfully!",
    });
  }, [recording]);

  const resetRecording = useCallback(() => {
    if (videoUrl) {
      URL.revokeObjectURL(videoUrl);
    }
    setVideoUrl(null);
    setRecordingTime(0);
    if (timeIntervalRef.current) {
      clearInterval(timeIntervalRef.current);
      timeIntervalRef.current = null;
    }
  }, [videoUrl]);

  const downloadVideo = useCallback(() => {
    if (videoUrl) {
      const a = document.createElement('a');
      a.href = videoUrl;
      a.download = `cover-letter-video-${Date.now()}.webm`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      
      toast({
        title: "Download Started",
        description: "Your video cover letter is being downloaded",
      });
    }
  }, [videoUrl]);

  const saveToProfile = useCallback(() => {
    if (videoUrl) {
      saveProfile({
        type: 'video',
        videoUrl,
        title: `Video Cover Letter - ${new Date().toLocaleDateString()}`,
      });
      
      toast({
        title: "Saved to Profile!",
        description: "Your video cover letter has been saved to your profile",
      });
    }
  }, [videoUrl, saveProfile]);

  return (
    <Card className="w-full max-w-2xl mx-auto glass-effect border-purple-200/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-xl text-amber-300">
          <Video className="w-6 h-6 text-purple-600" />
          Live Video Cover Letter
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Webcam View */}
        <div className="relative bg-black rounded-xl overflow-hidden">
          <Webcam
            audio
            ref={webcamRef}
            videoConstraints={videoConstraints}
            className="w-full h-auto rounded-xl"
            screenshotFormat="image/jpeg"
          />
          
          {/* Recording Overlay */}
          {recording && (
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-500/90 text-white px-3 py-2 rounded-full">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span className="font-medium">REC {recordingTime}s / 30s</span>
            </div>
          )}

          {/* Progress Bar */}
          {recording && (
            <div className="absolute bottom-4 left-4 right-4">
              <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-red-500 to-amber-500 transition-all duration-1000"
                  style={{ width: `${(recordingTime / 30) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4">
          {!recording && !videoUrl && (
            <Button
              onClick={startRecording}
              className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl"
            >
              <Video className="w-5 h-5 mr-2" />
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

          {videoUrl && (
            <>
              <Button
                onClick={saveToProfile}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl"
              >
                <Save className="w-5 h-5 mr-2" />
                Save to Profile
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
                onClick={downloadVideo}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl"
              >
                <Download className="w-5 h-5 mr-2" />
                Download
              </Button>
            </>
          )}
        </div>

        {/* Video Preview */}
        {videoUrl && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-300 text-center">Your Video Cover Letter</h3>
            <video
              src={videoUrl}
              controls
              className="w-full rounded-xl bg-black"
              style={{ maxHeight: '400px' }}
            />
          </div>
        )}

        {/* Instructions */}
        <div className="text-center text-amber-200/80 text-sm space-y-2">
          <p>• Click "Start Recording" to begin your 30-second video cover letter</p>
          <p>• Introduce yourself and explain why you're perfect for the role</p>
          <p>• Be authentic and show your personality!</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LiveVideo;