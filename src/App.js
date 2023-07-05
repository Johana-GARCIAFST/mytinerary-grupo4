import './App.css';
import Home from './componentes/home';
import Footer from './componentes/Footer';
import NavBar from './componentes/NavBar.jsx';
import Details from './componentes/Details';
import Cities from './componentes/Cities';
import {Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/Home' element={<Home/>}> </Route>
        <Route path='/Cities' element={<Cities/>}></Route> 
        <Route path='/Details/:id' element={<Details/>}></Route>
        <Route path='*' element={<Cities/>}></Route> 
        </Routes>
      <Footer/>
    </div>
  ); 
}

export default App;