import React from 'react';

export default function PlaylistActions() {
  return (
    <div className="pl-actions flex">
      <div className="pl-actions-profile flex">
        <div className="profile-thumb-img flex">
          <i className="fas fa-user" />
        </div>
        <p>Based on your listening history</p>
      </div>
      <button className="pl-actions-btn">Go to playlist</button>
    </div>
  );
}
