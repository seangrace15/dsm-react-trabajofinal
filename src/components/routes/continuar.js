import axios from 'axios';
import db from '../firestore/firestore';
import { useNavigate } from "react-router-dom";

function Continuar(props) {
    const history = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault()
        let email =event.target.email.value;
        let nombre =event.target.nombre.value;
        let direccion =event.target.direccion.value;
        let localidad =event.target.localidad.value;
        let provincia =event.target.provincia.value;
        let codigopostal =event.target.codigopostal.value;
        let telefono =event.target.telefono.value;
        let timestamp=Date.now();
        let date = Date();
        let timestampString=timestamp.toString();
        let pedido = '';
        let precio = props.precio;
        console.log(precio);
        for (let key in props.carrito) {
            console.log(props.carrito[key])
            pedido = pedido + props.carrito[key].id;
            pedido = pedido + ' : ';
            pedido = pedido + props.carrito[key].cantidad;
            pedido = pedido + ', ';

        }
        console.log(pedido);
            axios.post("https://firestore.googleapis.com/v1/projects/dsm-trabajofinal-sgp/databases/(default)/documents/pedidos", 
        { 
            fields: { 
                email: { stringValue: email}, 
                nombre: { stringValue: nombre}, 
                direccion: { stringValue: direccion }, 
                localidad: { stringValue: localidad }, 
                provincia: { stringValue: provincia }, 
                codigopostal: { stringValue: codigopostal }, 
                telefono: { stringValue: telefono },
                pedido:  { stringValue: pedido},
                precio: { doubleValue: precio},
                timestamp: { stringValue: timestampString},
                fecha: { stringValue: date }
            }
        }
        ).then(res => { 
            console.log("Post created") 
            history('/finalizado')

        })
    }

    return (
        <>
            <h1>Finalizar compra</h1>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4 form-group">
                        <label for="email">Email</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="ejemplo@outlook.com" required/>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4 form-group">
                        <label for="nombre">Nombre completo</label>
                        <input className="form-control" id="nombre" required/>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4 form-group">
                        <label for="direccion">Direccion</label>
                        <input className="form-control" id="direccion" required/>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4 form-group">
                        <label for="localidad">Localidad</label>
                        <input className="form-control" id="localidad" required/>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4 form-group">
                        <label for="provincia">Provincia</label>
                        <input className="form-control" id="provincia" required/>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4 form-group">
                        <label for="codigopostal">Codigo postal</label>
                        <input className="form-control" id="codigopostal" required/>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4 form-group">
                        <label for="telefono">Telefono</label>
                        <input className="form-control" id="telefono" required/>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4 form-group text-center">
                        <hr></hr>
                        <button type="submit" className="btn btn-primary">Realizar pedido</button>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
            </form>
        </>
    );
}

export default Continuar;