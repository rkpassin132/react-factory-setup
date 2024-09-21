import React, { useEffect } from 'react';
import './Header.module.scss';

const Header: React.FC = () => {
  
  useEffect(() => {

    return () => {
      // Cleanup (component will unmount)
    };
  }, []); 

  return (
    <div className="header-container">
      <h1>Header</h1>
    </div>
  );
};

export default Header;
