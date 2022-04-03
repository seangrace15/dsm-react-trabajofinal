import Elementos from "../carrito/elementos";

function Carrito(props) {
    return (
      <>
        <h1>CARRITO</h1>
        <Elementos carrito={props.carrito} precio={props.precio}></Elementos>
      </>
    );
  }
  
  export default Carrito;