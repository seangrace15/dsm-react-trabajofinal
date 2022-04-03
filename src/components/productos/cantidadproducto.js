import './cantidadproducto.css';

function CantidadProducto(props) {

    const sumar = (event) => {
        let newCarrito = [];
        let precio = 0;
        let cuenta = parseInt(props.currentValue);
        cuenta = cuenta + 1;
        props.setCurrentValue(cuenta);
        for (let key in props.carrito) {
            if(props.id==props.carrito[key].id){
                let update = props.carrito[key];
                update.cantidad = cuenta;
                newCarrito.push(update);
            }else{
                newCarrito.push(props.carrito[key]);
            }
            precio = precio + newCarrito[key].precio*newCarrito[key].cantidad;
        }
        props.setCarrito(newCarrito);
        props.setPrecio(precio);
    }
    const restar = (event) => {
        let newCarrito = [];
        let precio = 0;
        let cuenta = parseInt(props.currentValue);
        if(cuenta>0){
            cuenta = cuenta - 1;
            props.setCurrentValue(cuenta);
            for (let key in props.carrito) {
                if(props.id==props.carrito[key].id){
                    let update = props.carrito[key];
                    update.cantidad = cuenta;
                    newCarrito.push(update);
                    console.log('YES');
                }else{
                    newCarrito.push(props.carrito[key]);
                }
                precio = precio + newCarrito[key].precio*newCarrito[key].cantidad;
            }
            props.setPrecio(precio);
            props.setCarrito(newCarrito);
        }

    }
    return (
        <>
                <button onClick={sumar} className="btn btn-primary">+</button>
                <> </>
                <button onClick={restar} className="btn btn-primary">-</button>
        </>     
    )
}

export default CantidadProducto;