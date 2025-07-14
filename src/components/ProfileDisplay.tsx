import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2, Video, Mic, Camera } from 'lucide-react';
import { useProfile, ProfileData } from '@/contexts/ProfileContext';
import { toast } from '@/hooks/use-toast';

const ProfileDisplay: React.FC = () => {
  const { savedProfiles, deleteProfile } = useProfile();
  const [playingProfile, setPlayingProfile] = useState<string | null>(null);
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({});

  const handlePlay = (profile: ProfileData) => {
    // Stop any currently playing audio
    Object.values(audioRefs.current).forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });
    setPlayingProfile(null);

    if (profile.type === 'video' && profile.videoUrl) {
      // For video, we'll play it in a modal or expanded view
      const video = document.createElement('video');
      video.src = profile.videoUrl;
      video.controls = true;
      video.autoplay = true;
      video.style.maxWidth = '100%';
      video.style.maxHeight = '400px';
      video.style.borderRadius = '12px';
      
      // Create a simple modal
      const modal = document.createElement('div');
      modal.style.position = 'fixed';
      modal.style.top = '0';
      modal.style.left = '0';
      modal.style.width = '100%';
      modal.style.height = '100%';
      modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      modal.style.display = 'flex';
      modal.style.alignItems = 'center';
      modal.style.justifyContent = 'center';
      modal.style.zIndex = '1000';
      modal.onclick = () => document.body.removeChild(modal);
      
      modal.appendChild(video);
      document.body.appendChild(modal);
      
      setPlayingProfile(profile.id);
      video.onended = () => {
        setPlayingProfile(null);
        document.body.removeChild(modal);
      };
    } else if ((profile.type === 'memoji' || profile.type === 'photo') && profile.audioUrl) {
      // For audio, play it directly
      if (!audioRefs.current[profile.id]) {
        audioRefs.current[profile.id] = new Audio(profile.audioUrl);
      }
      
      const audio = audioRefs.current[profile.id];
      audio.play();
      setPlayingProfile(profile.id);
      
      audio.onended = () => setPlayingProfile(null);
    }
  };

  const handleStop = (profileId: string) => {
    if (audioRefs.current[profileId]) {
      audioRefs.current[profileId].pause();
      audioRefs.current[profileId].currentTime = 0;
    }
    setPlayingProfile(null);
  };

  const handleDelete = (profile: ProfileData) => {
    deleteProfile(profile.id);
    toast({
      title: "Profile Deleted",
      description: `${profile.title} has been removed from your profiles`,
    });
  };

  const getProfileIcon = (type: ProfileData['type']) => {
    switch (type) {
      case 'video':
        return <Video className="w-6 h-6" />;
      case 'memoji':
        return <Mic className="w-6 h-6" />;
      case 'photo':
        return <Camera className="w-6 h-6" />;
      default:
        return <Video className="w-6 h-6" />;
    }
  };

  const getProfileImage = (profile: ProfileData) => {
    if (profile.type === 'photo' && profile.photoUrl) {
      return profile.photoUrl;
    }
    // For video, we could extract a frame, but for now use a placeholder
    return `https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=200&h=200&fit=crop&crop=face`;
  };

  if (savedProfiles.length === 0) {
    return null;
  }

  return (
    <div className="flex justify-center gap-6 mb-8 px-4">
      {savedProfiles.map((profile) => (
        <div key={profile.id} className="relative group transition-all duration-300 hover:scale-105">
          {/* Circular Profile Picture */}
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-3 border-primary/30 hover:border-primary transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl backdrop-blur-sm">
            {profile.type === 'video' && profile.videoUrl ? (
              <video
                src={profile.videoUrl}
                className="w-full h-full object-cover"
                muted
                onClick={() => handlePlay(profile)}
              />
            ) : (
              <img
                src={getProfileImage(profile)}
                alt={profile.title}
                className="w-full h-full object-cover"
                onClick={() => handlePlay(profile)}
              />
            )}
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* Play/Pause Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-black/60 flex items-center justify-center backdrop-blur-md border border-white/20 shadow-lg">
              {playingProfile === profile.id ? (
                <Button
                  onClick={() => handleStop(profile.id)}
                  size="sm"
                  className="w-8 h-8 rounded-full p-0 bg-transparent hover:bg-white/20 border-0"
                >
                  <Pause className="w-4 h-4 text-white" />
                </Button>
              ) : (
                <Button
                  onClick={() => handlePlay(profile)}
                  size="sm"
                  className="w-8 h-8 rounded-full p-0 bg-transparent hover:bg-white/20 border-0"
                >
                  <Play className="w-4 h-4 text-white ml-0.5" />
                </Button>
              )}
            </div>
          </div>

          {/* Type Indicator with better styling */}
          <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center border-2 border-background shadow-md">
            <div className="text-primary-foreground">
              {getProfileIcon(profile.type)}
            </div>
          </div>

          {/* Playing Indicator with pulse animation */}
          {playingProfile === profile.id && (
            <div className="absolute -top-2 -right-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                <Volume2 className="w-3 h-3 text-white" />
              </div>
              <div className="absolute inset-0 w-6 h-6 bg-green-500/50 rounded-full animate-ping" />
            </div>
          )}

          {/* Subtle name label on hover */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-foreground/80 whitespace-nowrap shadow-sm">
              {profile.type === 'video' ? 'Video' : profile.type === 'memoji' ? 'Memoji' : 'Photo'}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileDisplay;