import './App.scss';
import Header from './components/Footer/Footer';
import Footer from './components/Header/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className='app-container'>
      <Header/>
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
