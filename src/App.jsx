import './App.css';
import Header from './components/Header/Header';
import SobreImage from './pages/Sobre/SobreImage';
import Sobre from './pages/Sobre/Sobre'
import Brands from './components/Brands/Brands'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className='img-background-sobre'>
      <Header/>
      <SobreImage/>
      </div>
      <Sobre/>
      <Brands/>
      <Footer/>
    </div>
  );
}

export default App;