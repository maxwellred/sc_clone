import React from 'react';

export default function WeeklyLinks() {
  return (
    <div className="links-container flex">
      <div className="profile-section flex">
        <div className="profile-thumb-img flex">
          <i className="fas fa-user" />
        </div>
        <p>Based on your listening history</p>
      </div>
      <button>Go To Playlist</button>
    </div>
  );
}
