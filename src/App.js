import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/UI/header';
import Footer from './components/UI/footer';
import Home from './components/routes/home';
import Carrito from './components/routes/carrito';
import Finalizado from './components/routes/finalizado';
import ErrorPage from './components/routes/errorpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import Continuar from './components/routes/continuar';
import Pedidos from './components/routes/pedidos';
import MostrarPedido from './components/routes/mostrarpedido';

function App() {
  const [carrito, setCarrito] = useState([]);
  const [precio, setPrecio] = useState('0');
  const [pedidos, setPedidos] = useState([]);
  const [pedido, setPedido] = useState([]);

  return (
    <div className="container bg-light">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home carrito={carrito} setCarrito={setCarrito} precio={precio} setPrecio={setPrecio} />} />
        <Route path="/carrito" element={<Carrito carrito={carrito} setCarrito={setCarrito} precio={precio} setPrecio={setPrecio}/>} />
        <Route path="/continuar" element={<Continuar carrito={carrito} setCarrito={setCarrito} precio={precio} setPrecio={setPrecio} />} />
        <Route path="/pedidos" element={<Pedidos pedido={pedido} setPedido={setPedido} pedidos={pedidos} setPedidos={setPedidos}/>} />
        <Route path="/mostrarpedido" element={<MostrarPedido pedido={pedido} setPedido={setPedido}/>} />
        <Route path="/finalizado" element={<Finalizado carrito={carrito} setCarrito={setCarrito} precio={precio} setPrecio={setPrecio}/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
