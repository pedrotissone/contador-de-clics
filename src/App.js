import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.jpg"
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  const manejarClic = () => {
    setCount(count + 1)
  }

  const reiniciarContador = () => {
    setCount(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='logo de freecodeCamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={count} />
        <Boton
          texto="Click"
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />       

      </div>      
    </div>
  );
}

export default App;
