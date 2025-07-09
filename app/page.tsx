'use client';
import { useState } from 'react';
import ProfileCard from './ProfileCard'
import SearchAndLeaderboard from './SearchAndLeaderboard'

interface ProfileData {
  name: string;
  title: string;
  handle: string;
  avatarUrl: string;
  searchCount?: number;
}

export default function Home() {
  const [profileData, setProfileData] = useState<ProfileData>({
    name: "Berzan",
    title: "Co-founder & CEO of monda exchange",
    handle: "berzanorg",
    avatarUrl: "https://cdn.discordapp.com/attachments/1347255078981074997/1392053798880673802/aV_RRUqA_400x400-removebg-preview.png?ex=686e22a0&is=686cd120&hm=b419b1f86a3c06e887906fcb2a97fe250892b0ff9ac035ad31ebc02082816962&"
  });

  const handleProfileUpdate = (newData: Partial<ProfileData>) => {
    setProfileData(prev => ({ ...prev, ...newData }));
  };

  const handleProfileSelect = (selectedProfile: ProfileData) => {
    setProfileData({
      name: selectedProfile.name,
      title: selectedProfile.title,
      handle: selectedProfile.handle,
      avatarUrl: selectedProfile.avatarUrl
    });
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '20px',
      position: 'relative'
    }}>
      <SearchAndLeaderboard onProfileSelect={handleProfileSelect} />
      
      <ProfileCard
        name={profileData.name}
        title={profileData.title}
        handle={profileData.handle}
        status="Online"
        contactText=''
        avatarUrl={profileData.avatarUrl}
        showUserInfo={true}
        enableTilt={true}
        onContactClick={() => window.open(`https://x.com/${profileData.handle}`, '_blank')}
        onProfileUpdate={handleProfileUpdate}
      />
    </div>
  );
}
