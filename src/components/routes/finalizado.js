import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

function Finalizado(props) {
  let newCarrito = [];
  useEffect(() => {
    props.setPrecio(0);
    props.setCarrito(newCarrito);
  });
  return (
    <>
      <h1>PEDIDO FINALIZADO</h1>
      <h2>Muchas gracias por completar el pedido, si quieres realizar otro pedido pulsa en el siguiente boton</h2>
      <Link to='/' className="btn btn-secondary">Nuevo pedido</Link>
    </>
  );
}

export default Finalizado;