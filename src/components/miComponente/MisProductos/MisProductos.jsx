import axios from "axios";
import React, { useEffect, useState } from "react";
import "./misproductos.scss";
import { useNavigate } from "react-router-dom";

const MisProductos = () => {
  const URL_BASE = "https://mini-back-nivelacion-dev-zkrn.3.us-1.fl0.io";

  const [categories, setCategories] = useState([]);
  const [rating, setRating] = useState([]);
  const [filters, setFilters] = useState({});
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterResponse, setFilterResponse] = useState([]);

  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get(`${URL_BASE}/products`);
      setProductos(data);
      setFilteredProducts(data);
      const categoriesList = getCategories(data);
      setCategories(categoriesList);
      const ratingList = getRatings(data);
      setRating(ratingList);
      setFilters({ ...filters });
    };
    getProducts();
  }, []);

  const getCategories = data => {
    const categoryList = data.map(item => item.category);
    return [...new Set(categoryList)];
  };

  const getRatings = data => {
    const ratingList = data.map(item => item.rating);
    const ratingWithoutDuplicates = [...new Set(ratingList)];
    return ratingWithoutDuplicates.sort((a, b) => a - b);
  };


  const handleFilter = (event, products) => {
    const { name, value } = event.target;
    const filterParams = {
      ...filters,
      [name]: value,
    };

    let productsFiltered = [...products];

    for (const key in filterParams) {
      if (filterParams[key]) {
        productsFiltered = productsFiltered.filter(
          product => product[key] == filterParams[key]
        );
      }
    }

    setFilters(filterParams);
    setFilterResponse(() =>
    productsFiltered.length > 0 ? '' : 'There are no results'
    );
    setFilteredProducts(productsFiltered);
  };
  return (
    <>
    <section className='mainFilterContainer'>
        <div className='categoryFilter'>
          <label>Category</label>
          <select
            name='category'
            value={filters.category}
            onChange={event => handleFilter(event, productos)}
          >
            <option value={''}>All</option>
            {categories.length > 0 ? (
              categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))
            ) : (
              <></>
            )}
          </select>
        </div>
        <div className='ratingFilter'>
          <label>Rating</label>
          <select
            name='rating'
            value={filters.rating}
            onChange={event => handleFilter(event, productos)}
          >
            <option value={''}>All</option>
            {rating.length > 0 ? (
              rating.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))
            ) : (
              <></>
            )}
          </select>
        </div>
      </section>
        <main className="cards__container">
          {filteredProducts.length ? (
            filteredProducts.map((producto, index) => (
              <section
                key={index}
                onClick={() => navigate(`${producto.id}`)}
                className="card__container"
              >
                <h1>{producto.title}</h1>
                <p>{producto.price}</p>
                <span>{producto.brand}</span>
                <p>{producto.rating}</p>
                <p>{producto.category}</p>
              </section>
            ))
          ) : filterResponse.length ? (
            <h2>{filterResponse}</h2>
          ) : (
            <>
              <p>cargando ...</p>
            </>
          )}
        </main>
    </>
  );
};

export default MisProductos;
