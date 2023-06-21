import './App.css';
import CallToAction from './componentes/CallToAction';
import Carrousel from './componentes/carrousel.jsx';
import Footer from './componentes/Footer';
import NavBar from './componentes/NavBar.jsx';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <CallToAction/>
      <Carrousel/>
      <Footer/>
    </div>
  );
}

export default App;