import {useState, useEffect} from 'react';
import Elemento from './elemento';
import CabeceraElementos from './cabeceraelementos';
import Total from './total';
import ConfirmarCompra from './confirmarcompra';

function Elementos(props) {

    const [elementos, setElementos] = useState([]);
    let listaElementos=[];
    console.log()
    for (let key in props.carrito) {
        if(props.carrito[key].cantidad!=0){
            console.log(props.carrito[key].id)
            listaElementos.push({
                id: props.carrito[key].id,
                nombre: props.carrito[key].nombre,
                precio: props.carrito[key].precio,
                img: props.carrito[key].img,
                cantidad: props.carrito[key].cantidad,
            });
        }
    }
    useEffect(() => {
        setElementos(listaElementos);
    },[]);
    return (
      <>
        <table className='table'>
            <CabeceraElementos></CabeceraElementos>
            <tbody>
            {elementos.map((elemento) => (
                <Elemento elemento={elemento}></Elemento>
            ))}
            <Total precio={props.precio}></Total>
            <ConfirmarCompra></ConfirmarCompra>
            </tbody>
        </table>
      </>
    );
  }
  
  export default Elementos;