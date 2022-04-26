import './App.css';

import Componente from './components/Componente';
import Estado from './components/Estado';
import Propiedades from './components/Propiedades';
import React from "react";
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </section>
        <section>
        <Componente msg="Hola soy un componente funcional expresado desde una prop"/>
        <hr/>
      
        <Propiedades
        cadena = "Esto es una cadena de texto"
        numero={19}// tiene que ser entre llaves , si se usan "" lo toma como string
        booleano={true}
        arreglo ={[1,2,3]}
        objeto ={{nombre:"Diego", correo: "dieguitocipo@hotmail.com"}}
        funcion ={(num)=> num*num}
        elementoReact ={<i>Esto es un elemento React</i>}
        componenteReact={<Componente msg = "soy un componente pasado como prop"/>}
        
        />

        <hr/>
        <Estado/>

        
        </section>
      </header>
      
    </div>
  );
}

export default App;