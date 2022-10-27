import React from "react";
import "../hojas-de-estilo/boton.css";
import "../hojas-de-estilo/contador.css";

function Boton({ texto, esBotonDeClic, manejarClic }) {
  return (
    <button
      className={esBotonDeClic ? "boton-Clic" : "boton-reiniciar"}
      onClick={manejarClic}
    >
      {texto}
    </button>
  );
}
export default Boton;
