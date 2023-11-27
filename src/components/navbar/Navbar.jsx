import React from "react";
import { useNavigate } from "react-router-dom";
import "../navbar/navbar.scss"

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
  const handleMitodolist = () => {
    navigate("/mitodolist")
  }
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
      <a
        onClick={handleMitodolist}
        href=""
      >
        Mi todo list
      </a>
    </nav>
  );
};

export default Navbar;
