import React,{Component} from "react";

import Componente from './Componente'

export  class EventosEs6 extends Component {
    constructor(props){
        super (props);
        this.state={
            contador:0, 
        };
        this.sumar=this.sumar.bind(this);
        this.restar=this.restar.bind(this);
    }
    sumar(e){
        console.log("Sumando");
        console.log(this);
        this.setState({
            contador:this.state.contador +1,
        });
    }
    restar(e){
        console.log("Restando");
        console.log(this);
        this.setState({
            contador:this.state.contador -1,
        });
    }
    render(){
        return (
            <div>
                <h2>Eventos en Componentes de clase Es6</h2>
                <h3>{this.state.contador}</h3>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
            </div>
        );
    }
}
//properties initializers
export  class EventosEs7 extends Component {
   state={
            contador:0,
        };
        
    
    // Al ser una arrow function heredan el this
    sumar= (e) =>{
        console.log("Sumando");
        console.log(this);
        this.setState({
            contador:this.state.contador +1,
        });
    }
    restar= (e)=>{
        console.log("Restando");
        console.log(this);
        this.setState({
            contador:this.state.contador -1,
        });
    }
    render(){
        return (
            <div>
                <h2>Eventos en Componentes de clase Es7</h2>
                <h3>{this.state.contador}</h3>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
            </div>
        );
    }
}
// function Boton (props){
//     return <button onClick={props.myOnClick}>boton hecho Componente</button>
// }
// simplifico la funcion con una arrow function
// const Boton = (props)=>(
//     <button onClick={props.myOnClick}>boton hecho Componente</button>
// );
// desestruturar para ahorrar los props.
const Boton = ({myOnClick})=>(
    <button onClick={myOnClick}>boton hecho Componente</button>
);

export class MasSobreEventos extends Component {
    handleClick =(e,mensaje)=>{
        console.log(e);
        console.log(e.nativeEvent);
        console.log(e.target);
        console.log(e.nativeEvent.target);
        console.log(mensaje);
    };
    render(){
        return(
            <div>
                <h2>Mas Sobre Eventos  </h2>
                <button
                 onClick={(e)=>
                 this.handleClick(e,"Hola pasando parametro desde un evento")
                }
                 >
                     Saludar
                 </button>
                 {/* Evento Personalizado */}
                 {/* <Boton
                 onClick={(e)=>
                    this.handleClick(e,"Hola pasando parametro desde un evento")
                   }
                   /> */}
                    <Boton
                 myOnClick={(e)=>
                    this.handleClick(e,"Hola pasando parametro desde un evento")
                   }
                   />

            </div>
        );
    }
}


