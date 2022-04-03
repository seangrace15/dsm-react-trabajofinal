import "./subtotal.css";
import { Link } from "react-router-dom";

function Subtotal(props) {
    return (
        <div className='subtotal'>
            <div className="col-sm-6"></div>
            <div className="col-sm-2 subtotal_texto">
                <h2>Precio total: </h2>
            </div>
            <div className="col-sm-1 subtotal_texto">
                <h2>{props.precio} €</h2>
            </div>
            <div className="col-sm-2 subtotal_texto">
                <Link to='/carrito' className="btn btn-secondary">Comprar</Link>
            </div>
        </div>
    )
}

export default Subtotal;