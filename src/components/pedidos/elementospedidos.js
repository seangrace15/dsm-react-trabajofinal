import { Modal, Button } from "bootstrap";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
function ElementosPedidos(props) {
    const borrar = (event) => {
        axios.delete('https://firestore.googleapis.com/v1/' + props.pedido.id)
            .then(response => {
                window.location.reload(false);
            }).catch(error => {

            });
    }
    const seleccionarpedido = (event) => {
        props.setPedido(props.pedido);
    }

    return (
        <>
            <tr>
                <th scope="col"><Link to='/mostrarpedido' onClick={seleccionarpedido}>{props.pedido.numeropedido}</Link></th>
                <th scope="col">{props.pedido.fecha}</th>
                <th scope="col">{props.pedido.precio}</th>
                <th scope="col">
                    <button onClick={borrar} className="btn btn-primary" >Eliminar pedido</button>
                </th>
            </tr>
        </>
    );
}

export default ElementosPedidos;