import './App.css';
import Header from './components/Header/Header';
import Intro from './pages/Intro/Intro';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className='aaa'>
      <Header/>
      <Intro/>
      </div>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;