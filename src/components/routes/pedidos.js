import { useEffect, useState } from 'react';
import axios from 'axios';
import ElementosPedidos from '../pedidos/elementospedidos';
import { Modal, Button } from 'bootstrap';
function Pedidos(props) {
    let arrayPedidos = [];


    useEffect(() => {
        axios.get('https://firestore.googleapis.com/v1/projects/dsm-trabajofinal-sgp/databases/(default)/documents/pedidos')
            .then(response => {
                for (let key in response.data.documents) {
                    console.log(response.data.documents);
                    arrayPedidos.push({
                        id: response.data.documents[key].name,
                        numeropedido: response.data.documents[key].fields.timestamp.stringValue,
                        fecha: response.data.documents[key].fields.fecha.stringValue,
                        precio: response.data.documents[key].fields.precio.doubleValue,
                        email: response.data.documents[key].fields.email.stringValue,
                        nombre: response.data.documents[key].fields.nombre.stringValue,
                        direccion: response.data.documents[key].fields.direccion.stringValue,
                        localidad: response.data.documents[key].fields.localidad.stringValue,
                        provincia: response.data.documents[key].fields.provincia.stringValue,
                        codigopostal: response.data.documents[key].fields.codigopostal.stringValue,
                        telefono: response.data.documents[key].fields.telefono.stringValue,
                        pedido: response.data.documents[key].fields.pedido.stringValue,
                        precio: response.data.documents[key].fields.precio.doubleValue,
                    });
                }
                props.setPedidos(arrayPedidos);
            }).catch(error => {
                console.log('Se ha producido un error');
            });

    }, [])
    console.log(props.pedidos);

    return (
        <div>
            <h1>PEDIDOS</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope="col">Numero Pedido</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {props.pedidos.map((pedido) => (
                        <ElementosPedidos setPedido={props.setPedido} pedidos={props.pedidos} setPedidos={props.setPedidos} pedido={pedido}></ElementosPedidos>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default Pedidos;