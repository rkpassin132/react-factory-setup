import React, { useEffect } from 'react';
import './Home.module.scss';

const Home: React.FC = () => {

  useEffect(() => {

    return () => {
      // Cleanup (component will unmount)
    };
  }, []); 

  return (
    <div className="home-container">
      <h1>Home</h1>
    </div>
  );
};

export default Home;
