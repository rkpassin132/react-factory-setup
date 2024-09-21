import React from "react";
import "./App.scss";
import Header from "./components/Footer/Footer";
import Footer from "./components/Header/Header";
import AppRoute from "./routes";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <AppRoute />
      <Footer />
    </div>
  );
};

export default App;
