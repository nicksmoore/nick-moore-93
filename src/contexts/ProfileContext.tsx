import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface ProfileData {
  id: string;
  type: 'video' | 'memoji' | 'photo';
  videoUrl?: string;
  audioUrl?: string;
  photoUrl?: string;
  createdAt: Date;
  title: string;
}

interface ProfileContextType {
  savedProfiles: ProfileData[];
  saveProfile: (profile: Omit<ProfileData, 'id' | 'createdAt'>) => void;
  deleteProfile: (id: string) => void;
  clearAllProfiles: () => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};

interface ProfileProviderProps {
  children: ReactNode;
}

export const ProfileProvider: React.FC<ProfileProviderProps> = ({ children }) => {
  const [savedProfiles, setSavedProfiles] = useState<ProfileData[]>([]);

  // Load profiles from Supabase on mount
  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      const { data, error } = await supabase
        .from('virtual_profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      const profiles: ProfileData[] = data?.map(item => ({
        id: item.id,
        type: item.type as 'video' | 'memoji' | 'photo',
        title: item.title,
        videoUrl: item.video_url || undefined,
        audioUrl: item.audio_url || undefined,
        photoUrl: item.photo_url || undefined,
        createdAt: new Date(item.created_at),
      })) || [];

      setSavedProfiles(profiles);
    } catch (error) {
      console.error('Error fetching profiles:', error);
    }
  };

  const saveProfile = async (profile: Omit<ProfileData, 'id' | 'createdAt'>) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        console.error('User not authenticated');
        return;
      }

      const { data, error } = await supabase
        .from('virtual_profiles')
        .insert({
          user_id: user.id,
          type: profile.type,
          title: profile.title,
          video_url: profile.videoUrl,
          audio_url: profile.audioUrl,
          photo_url: profile.photoUrl,
        })
        .select()
        .single();

      if (error) throw error;

      const newProfile: ProfileData = {
        id: data.id,
        type: data.type as 'video' | 'memoji' | 'photo',
        title: data.title,
        videoUrl: data.video_url || undefined,
        audioUrl: data.audio_url || undefined,
        photoUrl: data.photo_url || undefined,
        createdAt: new Date(data.created_at),
      };

      setSavedProfiles(prev => [newProfile, ...prev]);
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  const deleteProfile = async (id: string) => {
    try {
      const { error } = await supabase
        .from('virtual_profiles')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setSavedProfiles(prev => prev.filter(profile => profile.id !== id));
    } catch (error) {
      console.error('Error deleting profile:', error);
    }
  };

  const clearAllProfiles = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { error } = await supabase
        .from('virtual_profiles')
        .delete()
        .eq('user_id', user.id);

      if (error) throw error;

      setSavedProfiles([]);
    } catch (error) {
      console.error('Error clearing profiles:', error);
    }
  };

  return (
    <ProfileContext.Provider value={{
      savedProfiles,
      saveProfile,
      deleteProfile,
      clearAllProfiles,
    }}>
      {children}
    </ProfileContext.Provider>
  );
};