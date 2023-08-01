

import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ videoUrl }) => {
  const playerConfig = {
    file: {
      attributes: {
        controlsList: 'nodownload',
        onContextMenu: e => e.preventDefault(), // Prevent right-click context menu
      },
    },
  };

  return (
    <div>
      <ReactPlayer url={videoUrl} controls config={playerConfig} />
    </div>
  );
};

export default VideoPlayer;
