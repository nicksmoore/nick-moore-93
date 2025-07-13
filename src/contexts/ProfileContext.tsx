import React, { createContext, useContext, useState, ReactNode } from 'react';

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

  const saveProfile = (profile: Omit<ProfileData, 'id' | 'createdAt'>) => {
    const newProfile: ProfileData = {
      ...profile,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    };
    setSavedProfiles(prev => [...prev, newProfile]);
  };

  const deleteProfile = (id: string) => {
    setSavedProfiles(prev => prev.filter(profile => profile.id !== id));
  };

  const clearAllProfiles = () => {
    setSavedProfiles([]);
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