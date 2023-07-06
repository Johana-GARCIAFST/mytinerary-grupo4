import { useEffect, useState } from "react";
import { Link as LinkRouter } from 'react-router-dom'
import "../cities.css"
import Animation from "./squeleton"
import axios from "axios"

function Cities() {
  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState("");
  const [arrayAfiltrar, setArrayAfiltrar] = useState([]);

  async function getData() {
    const citiesDb = await axios.get("https://johana-api-cities-crud.onrender.com/api/cities");
    setCities(citiesDb.data.response.cities);
    setArrayAfiltrar(citiesDb.data.response.cities);
  }

  const input = e => {
    setSearch(e.target.value);
    filtered(e.target.value);
  };

  const filtered = inputSearch => {
    const resultSearch = arrayAfiltrar.filter(element =>
      element.name.toLowerCase().startsWith(inputSearch.toLowerCase())
    );
    setCities(resultSearch);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <input type="search" value={search} placeholder="Find your City" onChange={input} />
      </div>

      <h1 className="titulo">Cities</h1>
      <div className='contenedorCities'>
        {cities.length > 0 ? 
          cities.map((city, index) => (
            <div className="tarjeta" key={index}>
              <img src={city.image} alt="" />
              <h2>{city.name}</h2>
              <LinkRouter to={'/Details/' + city._id}>
                <button className="botonDetalles">
                  Details
                </button>
              </LinkRouter>
            </div>
          )) 
        : 
          <Animation />
        }
      </div>
    </>
  );
}

export default Cities;
