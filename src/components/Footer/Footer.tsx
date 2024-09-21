import React, { useEffect } from 'react';
import './Footer.module.scss';

const Footer: React.FC = () => {

  useEffect(() => {

    return () => {
      // Cleanup (component will unmount)
    };
  }, []); 

  return (
    <div className="footer-container">
      <h1>Footer</h1>
    </div>
  );
};

export default Footer;
