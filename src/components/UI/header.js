import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className='navbar navbar-expand-lg navbar-light'>
            <div className='row'>
                <nav>
                    <Link to="/">Inicio</Link> | {'   '}
                    <Link to="/carrito">Carrito</Link> | {'   '}
                    <Link to="/pedidos">Mis Pedidos</Link> | {'   '}
                </nav>
            </div>
        </div>
    );
}

export default Header;
