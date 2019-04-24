import React from 'react';

export default function PlaylistTracks(props) {
  return (
    <ul className="pl-list">
      {props.playlist.map(ele => {
        return (
          <li className="pl-list-item flex" key={ele.id}>
            <div className="pl-list-item-trackinfo-container">
              <span className="pl-list-item-artist">{ele.artist} - </span>
              <span className="pl-list-item-trackname">{ele.track}</span>
            </div>
            <div className="pl-list-item-actions-container">
              <ul className="pl-list-item-actions-list">
                <li>
                  <i className="fas fa-heart" />
                </li>
                <li>
                  <i className="fas fa-retweet" />
                </li>
                <li>
                  <i className="fas fa-share-square" />
                </li>
                <li>
                  <i className="fas fa-ellipsis-h" />
                </li>
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
