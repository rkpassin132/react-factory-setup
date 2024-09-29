import React, { useEffect } from 'react';
import './Footer.module.scss';

const Footer: React.FC = () => {
  useEffect(() => {
    return () => {
      // Cleanup (component will unmount)
    };
  }, []);

  return (
    <footer className="footer-container p-4 text-center">
      <p className="text-white-600">
        Check out the full documentation for <strong>React-Factory-Cli</strong>{' '}
        on
        <a
          href="https://www.npmjs.com/package/react-factory-cli"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline ml-1"
        >
          npm.
        </a>
      </p>
    </footer>
  );
};

export default Footer;
