import CantidadProducto from './cantidadproducto';
import FotoProducto from './fotoproducto';
import UnidadesProducto from './unidadesproducto';
import './producto.css';
import {useState} from 'react';

function Producto(props) {

    const nombre = props.nombre;
    const precio = props.precio;
    const img = props.img;
    const [currentValue, setCurrentValue] = useState(props.cantidad);

    return (
        <div className='producto'>
            <FotoProducto img={img} />
            <div className='producto__descripcion'>
                <div className='col-sm-7'>
                    <h2>{nombre}</h2>
                </div>
                <div className='producto__precio col-sm-1'>
                    {precio}€
                </div>
                <div className='col-sm-1'>
                    <CantidadProducto setPrecio={props.setPrecio} id={props.id} carrito={props.carrito} setCarrito={props.setCarrito} currentValue={currentValue} setCurrentValue={setCurrentValue}/>
                </div>
                <div className='col-sm-1'>
                    <UnidadesProducto currentValue={currentValue} setCurrentValue={setCurrentValue}/>
                </div>
            </div>
        </div>
    )
}

export default Producto;