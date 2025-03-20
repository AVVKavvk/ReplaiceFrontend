import React from 'react';
import previewImage from '../img/preview.png'
function Home() {
  return (
    <div className="flex flex-col bg-base-300 items-center justify-center h-screen text-center p-5">
      <h1 className="text-4xl mb-6">
        Welcome to Your Replaice
      </h1>
      <p className="text-4xl font-bold  mb-6">
      Transforming work with cutting-edge AI agents
      </p>
      <img 
        src={previewImage} 
        alt="Dashboard Illustration" 
        className="w-[1300px] h-auto rounded-lg shadow-lg"
      />
    </div>
  );
}

export default Home;
