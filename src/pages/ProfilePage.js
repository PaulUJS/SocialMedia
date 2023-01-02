import React from 'react';

import ProfileDisplay from '../components/ProfileDisplay';
import Feed from '../components/Feed';

function ProfilePage() {
  return (
    <>
      <div className='profile-container'>
        <ProfileDisplay/>
        <Feed/>
      </div>
    </>
  )
}

export default ProfilePage