import "./App.css";

import {EventosEs6, EventosEs7, MasSobreEventos} from './components/Eventos';

// import AjaxApis from './components/AjaxApis';
import AjaxHooks from "./components/AjaxHooks";
import CicloVida from './components/CicloVida';
import Componente from './components/Componente';
import ComponentesEstilizados from "./components/ComponetesEstilizados";
import ComunicacionComponentes from './components/ComunicacionComponentes';
import ContadorHooks from './components/ContadorHooks';
import Estado from './components/Estado';
import Estilos from "./components/Estilos";
import Formularios from './components/Formularios';
import HooksPersonalizados from "./components/HooksPersonalizados";
import Propiedades from './components/Propiedades';
import React from "react";
import Referencias from "./components/Referencias";
import RelojHooks from './components/RelojHooks';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import ScrollHooks from './components/ScrollHooks';
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
        <hr/>
        <RenderizadoCondicional/>
        <hr/>
        <RenderizadoElementos/>
        <hr/>
        <EventosEs6/>
        <hr/>
        <EventosEs7/>
        <hr/>
        <MasSobreEventos/>
        <hr/>
        <ComunicacionComponentes/>
        <hr/>
        <CicloVida/>
        <hr/>
        {/* <AjaxApis/> */}
        <hr/>
        <ContadorHooks titulo ="Seguidores"/>
        <hr/>
        <Referencias/>
        <hr/>
        <ScrollHooks/>
        <hr/>
        <RelojHooks/>
        <hr/>
        {/* <AjaxHooks/> */}
        <hr/>
        <HooksPersonalizados/>
        <hr/>
        <Formularios/>
        <hr/>
        <Estilos/>
        <hr/>
        <ComponentesEstilizados/>
        

      
        
        
        </section>
      </header>
      
    </div>
  );
}

export default App;
