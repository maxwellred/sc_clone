import React from 'react';

export default function WeeklyImg(props) {
  return (
    <div className="img-container">
      <div className="play-btn flex">
        <i className="fas fa-play" />
      </div>
      <img src={props.albumart} alt="Album Art" />
    </div>
  );
}
