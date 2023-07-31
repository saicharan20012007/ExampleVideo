import React from 'react';
import VideoPlayer from './components/VideoPlayer';

const App = () => {
  const videoUrl = 'https://res.cloudinary.com/dlovqnrza/video/upload/v1690778987/Prabisha_Consulting_rarkk0.mp4';

  return (
    <div className='bg-container'>
      <h1>Prabisha Consulting</h1>
      <VideoPlayer videoUrl={videoUrl} />
    </div>
  );
};

export default App;
