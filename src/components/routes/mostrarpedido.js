import { Link } from "react-router-dom";
function MostrarPedido(props) {
    console.log('ASDASD')
    console.log(props.pedido);
    return (
      <>
        <h1>PEDIDO</h1>
        <h2>Numero pedido: {props.pedido.numeropedido}</h2>
        <h3>Fecha: {props.pedido.fecha}</h3>
        <h4>Pedido: {props.pedido.pedido}</h4>
        <h4>Nombre: {props.pedido.nombre}</h4>
        <h4>Direccion: {props.pedido.direccion}</h4>
        <h4>Localidad: {props.pedido.localidad}</h4>
        <h4>Provincia: {props.pedido.provincia}</h4>
        <h4>Codigo postal: {props.pedido.codigopostal}</h4>
        <h4>Telefono: {props.pedido.telefono}</h4>
        <Link to='/pedidos' className="btn btn-primary" >Volver</Link>
      </>
    );
  }
  
  export default MostrarPedido;