import './App.css';
import freecodecamplogo from './imagenes/descarga.png'

function App() {
  return (
    <div className='App'>
     <div className='freecodecamp-logo-contenedor'>
      <img className='frecodecamp-logo'
        src={freecodecamplogo}
        alt='logo de freecodecamp'
      />
     </div>
    </div>
  );
}

export default App;
