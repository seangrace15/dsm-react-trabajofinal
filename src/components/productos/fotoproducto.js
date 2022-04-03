import './fotoproducto.css';

function FotoProducto(props) {

    const img = props.img;
    console.log(img);
    return (
            <img src={img} className="img-fluid rounded producto-img" alt="..."></img>
    )
}

export default FotoProducto;