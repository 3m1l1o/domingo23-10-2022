import "./App.css";
import Boton from "./hojas-de-estilo/boton";
import Contador from "./componentes/contador";
import freecodecamplogo from "./imagenes/descarga.png";
import { useState } from "react";

function App() {
  const [ numClic, setNumClic] = useState(0);

  const  manejarClic = ()=>{
    setNumClic( numClic + 1)
  };

  const reiniciarContador=()=>{
    setNumClic( 0 )
  }
  
  

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="frecodecamp-logo"
          src={freecodecamplogo}
          alt="logo de freecodecamp"
        />
      </div>

      <div className="contenedor-principal">
        <Contador numClic= {numClic} />
        <Boton texto="clic" esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton
          texto="reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
