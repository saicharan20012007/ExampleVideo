import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ videoUrl }) => {
  const playerConfig = {
    file: {
      attributes: {
        controlsList: 'nodownload', // Disable the download option
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
