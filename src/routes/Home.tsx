import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen w-full grid place-items-center bg-gray-300">
      <div className="w-80 h-80 grid place-items-center rounded-md shadow-md p-4 bg-white">
        <h1>Hello this is home page with super secret message</h1>
      </div>
    </div>
  );
};

export default Home;
