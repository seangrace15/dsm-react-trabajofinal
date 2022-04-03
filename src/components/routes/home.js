import Productos from "../productos/productos";
import Subtotal from "../subtotal/subtotal";
import {useState} from 'react';

function Home(props) {

    return (
      <>
        <h1>HOME</h1>
        <Productos setPrecio={props.setPrecio} carrito={props.carrito} setCarrito={props.setCarrito}></Productos>
        <Subtotal carrito={props.carrito} precio={props.precio}></Subtotal>
      </>
    );
  }
  
  export default Home;