import React, { useEffect } from 'react';
import './Home.module.scss';
import { Helmet } from 'react-helmet-async';

const Home: React.FC = () => {
  useEffect(() => {
    return () => {
      // Cleanup (component will unmount)
    };
  }, []);

  const renderSeoTags = () => {
    return (
      <Helmet>
        <title>Home Page - React Factory CLI</title>
        <meta property="og:title" content="Home Page - React Factory CLI" />
        <link rel="canonical" href="/home" />
      </Helmet>
    );
  };

  return (
    <>
      {renderSeoTags()}
      <main className="flex justify-center items-center min-h-[75vh]">
        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8 max-w-xl">
          <h2 className="text-3xl font-bold mb-4 text-center">
            React-Factory-Cli
          </h2>
          <p className="text-gray-300 mb-6">
            The <strong>React-Factory-Cli</strong> is a powerful CLI tool that
            helps you initialize React projects with customizable templates. It
            supports generating components, services, and more, following best
            practices.
          </p>
          <p className="text-gray-300 mb-6">
            Whether you're starting a new project or organizing an existing one,
            this CLI streamlines your development process by providing essential
            commands to scaffold components and structure your project
            efficiently.
          </p>
          <p className="text-blue-400 font-semibold text-center">
            For detailed documentation and installation instructions, visit the
            <a
              href="https://www.npmjs.com/package/react-factory-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline ml-1"
            >
              npm package page.
            </a>
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
