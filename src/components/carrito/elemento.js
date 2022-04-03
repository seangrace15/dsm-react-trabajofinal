function Elemento(props) {

    return (
      <tr>
        <td>{props.elemento.nombre}</td>
        <td>{props.elemento.id}</td>
        <td>{props.elemento.cantidad}</td>
        <td>{props.elemento.precio}€</td>
        <td>{props.elemento.precio*props.elemento.cantidad}€</td>
      </tr>
    );
  }
  
  export default Elemento;