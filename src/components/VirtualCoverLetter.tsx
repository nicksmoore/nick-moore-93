import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, Camera, Smile, ArrowLeft } from 'lucide-react';
import LiveVideo from './LiveVideo';
import VoiceOverMemoji from './VoiceOverMemoji';
import VoiceOverPhoto from './VoiceOverPhoto';

type CoverLetterType = 'video' | 'memoji' | 'photo' | null;

const VirtualCoverLetter: React.FC = () => {
  const [selectedType, setSelectedType] = useState<CoverLetterType>(null);

  const handleTypeSelect = (type: CoverLetterType) => {
    setSelectedType(type);
  };

  const handleBack = () => {
    setSelectedType(null);
  };

  if (selectedType) {
    return (
      <div className="w-full max-w-4xl mx-auto space-y-6">
        <Button
          onClick={handleBack}
          variant="outline"
          className="mb-4 rounded-xl border-purple-400/50 hover:bg-purple-500/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Options
        </Button>
        
        {selectedType === 'video' && <LiveVideo />}
        {selectedType === 'memoji' && <VoiceOverMemoji />}
        {selectedType === 'photo' && <VoiceOverPhoto />}
      </div>
    );
  }

  return (
    <Card className="w-full max-w-4xl mx-auto glass-effect border-purple-200/30">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-light text-amber-300 mb-4">
          Create Your Virtual Cover Letter
        </CardTitle>
        <p className="text-amber-200/80 text-lg">
          Choose your preferred format to create a personalized 30-second introduction
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Live Video Option */}
          <div 
            onClick={() => handleTypeSelect('video')}
            className="group cursor-pointer"
          >
            <Card className="h-full glass-effect border-purple-200/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-2xl flex items-center justify-center group-hover:from-red-500/40 group-hover:to-red-600/40 transition-colors">
                  <Video className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-amber-300">Live Video</h3>
                <p className="text-amber-200/80 text-sm">
                  Record yourself speaking directly to the camera. Perfect for showing your personality and communication skills.
                </p>
                <Button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl">
                  Start Recording
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Voice-Over Memoji Option */}
          <div 
            onClick={() => handleTypeSelect('memoji')}
            className="group cursor-pointer"
          >
            <Card className="h-full glass-effect border-purple-200/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center group-hover:from-purple-500/40 group-hover:to-purple-600/40 transition-colors">
                  <Smile className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold text-amber-300">Voice-Over Memoji</h3>
                <p className="text-amber-200/80 text-sm">
                  Record your voice with an animated avatar. Fun and engaging while maintaining professionalism.
                </p>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-xl">
                  Create Memoji
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Voice-Over Photo Option */}
          <div 
            onClick={() => handleTypeSelect('photo')}
            className="group cursor-pointer"
          >
            <Card className="h-full glass-effect border-purple-200/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-2xl flex items-center justify-center group-hover:from-amber-500/40 group-hover:to-amber-600/40 transition-colors">
                  <Camera className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold text-amber-300">Voice-Over Photo</h3>
                <p className="text-amber-200/80 text-sm">
                  Upload your professional photo and add a voice-over. Classic and polished presentation.
                </p>
                <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-xl">
                  Upload Photo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features List */}
        <div className="mt-8 bg-purple-900/20 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-amber-300 mb-4 text-center">
            All formats include:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-amber-200/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-amber-500 rounded-full"></div>
              30-second time limit
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-amber-500 rounded-full"></div>
              High-quality recording
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-amber-500 rounded-full"></div>
              Instant preview
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-amber-500 rounded-full"></div>
              Download option
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VirtualCoverLetter;