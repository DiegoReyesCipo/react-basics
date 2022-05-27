import"./Estilos.css";
import"./Estilos.scss";

import React from 'react';
import moduleStyles from "./Estilos.module.css";

export default function Estilos (){
    let myStyles   ={
        borderRadius:".5rem",
        margin:"2rem auto",
        maxWidth:"50%",
               
    };
    return(
        <section className='estilos'>
            <h2>Estilos Css en React</h2>
            <h3 
            className='bg-react'
            >
            Estilos en hoja css externa</h3>
            <h3 
            className='bg-react' 
            style={{borderRadius:".25rem",margin:"1rem"}}
            >
            Estilos en linea (atributo style)</h3> 
            <h3 className='bg-react' style={myStyles}>
                Estilos en linea 
                </h3>
            <h3 className='bg-react'>
            Agregando NOrmaliza con  
            <br/>
            <code>@import-normalize;</code>
            </h3>    
            <h3 className={moduleStyles.error}>estilos con modulos</h3>
            <h3 className={moduleStyles.success}>estilos con modulos</h3>
            <h3 className='bg-sass'>Estilos con Sass</h3>
        </section>
    )
}
