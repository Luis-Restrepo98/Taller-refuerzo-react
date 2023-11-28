import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetallesProductos = () => {
  const URL_BASE = "https://mini-back-nivelacion-dev-zkrn.3.us-1.fl0.io";

  const { id } = useParams();

  const [producto, setProducto] = useState({});

  useEffect(() => {
    const getProductById = async () => {
      const { data } = await axios.get(`${URL_BASE}/products/${id}`);
      setProducto(data);
    };
    getProductById();
  }, []);
  console.log(producto);
  return (
    <div>
      <section>
        <h1>{producto.title}</h1>
        <p>{producto.price}</p>
        <span>{producto.brand}</span>
        <p>{producto.rating}</p>
        <p>{producto.category}</p>
        <p>{producto.description}</p>
        <img src={producto.thumbnail} alt="" />
      </section>
    </div>
  );
};

export default DetallesProductos;
