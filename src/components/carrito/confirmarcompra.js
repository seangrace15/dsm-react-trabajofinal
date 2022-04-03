import { Link } from "react-router-dom";
function ConfirmarCompra(props) {

    return (
        <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"><Link to='/continuar' className="btn btn-secondary">Continuar</Link></th>
        </tr>
    );
  }
  
  export default ConfirmarCompra;