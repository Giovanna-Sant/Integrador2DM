import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Perfil from './pages/Perfil/Perfil'

function App() {
  return (
    <div className="App">
      <Header/>
      <Perfil/>
      <Footer/>
    </div>
  );
}

export default App;