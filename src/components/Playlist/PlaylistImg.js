import React from 'react';

export default function PlaylistImg(props) {
  return (
    <div className="pl-img">
      <div className="pl-img-btn flex">
        <i className="fas fa-play" />
      </div>
      <img src={props.albumart} alt="Album Art" />
    </div>
  );
}
