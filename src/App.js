import LightApp from "./componentes/lightapp";
import NavBar from "./componentes/NavBar";
import Cities from "./componentes/Cities";
import {Routes, Route} from "react-roter-dom";

import"./App.css";

function App() {
  return (
    <div className="body">

     <NavBar />
     <Routes>
      <Route path="/Home" element={<LightApp />}> </Routes>
      <Route path="/Cities" element={<Cities/>}> </Route>

     </Routes>

    </div>
  );
}

export default App;
