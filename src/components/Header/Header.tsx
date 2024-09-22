import React, { useEffect } from "react";
import "./Header.module.scss";

const Header: React.FC = () => {
  useEffect(() => {
    return () => {
      // Cleanup (component will unmount)
    };
  }, []);

  return (
    <header className="header-container p-4">
      <div className="container mx-auto flex justify-center items-center">
        <img src="/logo.png" alt="React Logo" className=" h-14 mr-2" />
      </div>
    </header>
  );
};

export default Header;
