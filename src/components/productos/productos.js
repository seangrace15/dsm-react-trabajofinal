import { useEffect, useState } from 'react';
import Producto from './producto';
import axios from 'axios';

function Productos(props) {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        if (props.carrito.length == 0) {

            axios.get('https://firestore.googleapis.com/v1/projects/dsm-trabajofinal-sgp/databases/(default)/documents/productos')
                .then(response => {
                    let arrayProductos = [];
                    for (let key in response.data.documents) {
                        let cutid = response.data.documents[key].name.split("productos/");
                        console.log(cutid);
                        arrayProductos.push({
                            id: cutid[1],
                            nombre: response.data.documents[key].fields.nombre.stringValue,
                            precio: response.data.documents[key].fields.precio.stringValue,
                            img: response.data.documents[key].fields.img.stringValue,
                            cantidad: 0,
                        });
                    }
                    console.log('aqui1');
                    console.log(arrayProductos);
                    setProductos(arrayProductos);
                    props.setCarrito(arrayProductos);

                }).catch(error => {
                    console.log('Se ha producido un error');
                });
        }else{
            setProductos(props.carrito);
            console.log('aqui');
            console.log(props.carrito);
        }
    }, [])
    return (
        <>
            {productos.map((elemento) => (
                <Producto
                    id={elemento.id}
                    nombre={elemento.nombre}
                    precio={elemento.precio}
                    img={elemento.img}
                    cantidad={elemento.cantidad}
                    carrito={props.carrito}
                    setCarrito={props.setCarrito}
                    setPrecio={props.setPrecio}
                />
            ))}
        </>
    )
}

export default Productos;
