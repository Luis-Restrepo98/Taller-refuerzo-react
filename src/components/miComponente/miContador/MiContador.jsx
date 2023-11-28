import React, { useState } from "react";

const MiContador = () => {
  const [contador, setContador] = useState(0);

  const handleDecrement = () => {
    setContador(contador-1);
  };
  const handleIncrement = () => {
    setContador(contador+1);
  };
  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <span>{contador}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default MiContador;
