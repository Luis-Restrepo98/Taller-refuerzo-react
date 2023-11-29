import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleProductos = () => {
    navigate("/misproductos");
  };

  const handleContador = () => {
    navigate("/micontador");
  };

  const handleComponente = () => {
    navigate("/micomponente");
  };

  const handleMiContadorUseReducer = () => {
    navigate("/miContadorUseReducer");
  };
  return (
    <nav>
      <a
        onClick={handleProductos}
        href=""
      >
        Mis Productos
      </a>
      <a
        onClick={handleContador}
        href=""
      >
        Mi Contador
      </a>
      <a
        onClick={handleComponente}
        href=""
      >
        Mi Componente
      </a>
      <a
        onClick={handleMiContadorUseReducer}
        href=""
      >
        Mi Contador con useReducer
      </a>
    </nav>
  );
};

export default Navbar;
