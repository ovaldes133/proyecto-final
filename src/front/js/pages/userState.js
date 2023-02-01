import { useNavigate } from "react-router-dom";
import { Logo } from "../component/Logo";
import React, { useState } from "react";
import { items } from "./items.js";
const Categorias = [
  {
    nombre: "Todos los productos",
    articulos: [
      "frenos",
      "manubrio",
      "parches",
      "cadenas",
      "neumaticos",
      "sillin",
      "casco",
      "puño",
      "punteras",
    ],
  },
  {
    nombre: "repuestos",
    articulos: ["frenos", "manubrio", "parches", "cadenas", "neumaticos"],
  },
  {
    nombre: "accesorios",
    articulos: ["sillin", "casco", "puño", "punteras"],
  },
  {
    nombre: "suplementos",
    articulos: ["creatina", "proteinas", "aminoacidos", "barras energeticas"],
  },
];

export const UserStore = () => {
  const navigate = useNavigate();

  const [idArticulos, setIdArticulos] = useState(-1);
  const [category, setCategory] = useState("");
  const [itemName, setItemName] = useState("");
  const [selectedProduct, setSelectedProduct] = useState([
    { img: "", item: "", price: "", id: -1 },
  ]);
  const handlerCargarArticulos = function (e) {
    const opcion = e.target.value;
    console.log(opcion);
    setCategory(opcion);
    //setIdArticulos(opcion);
  };
  const handleProduct = (product) => {
    product.preventDefault();
    setItemName(product.target.value);
    const products = items.filter((item) => item.item == "freno");

    setSelectedProduct(products);
    console.log(selectedProduct);
  };

  return (
    <form className="contenedor-login">
      <div className="mb-3">
        <div className="nombre-tienda">
          <Logo />
        </div>
        <div className="carrito">
          <button
            onClick={() => alert("proximamente")}
            type="submit"
            className="btn btn-dark"
          >
            <i className="fa-solid fa-cart-shopping"></i>{" "}
          </button>
        </div>

        <select
          name="categorias"
          id="selCategoria"
          onClick={handlerCargarArticulos}
          className="form-select"
          aria-label="Default select example"
        >
          <option value={""} selected>
            Categoria
          </option>
          {Categorias.map((item, i) => (
            <option key={"categoria" + i} value={item.nombre}>
              {item.nombre}
            </option>
          ))}
        </select>

        <select
          name="articulos"
          id="selarticulos"
          onClick={handleProduct}
          className="form-select"
          aria-label="Default select example"
        >
          <option value={""} selected>
            Productos
          </option>
          {category != "" &&
            items
              .filter((item, i) => item.category == category)
              .map((item) => (
                <option key={"articulo" + item.id} value={item.item}>
                  {item.item}
                </option>
              ))}
        </select>

        <div
          id="carouselExampleControlsNoTouching"
          class="carousel slide"
          data-bs-touch="false"
        >
          <div class="carousel-inner">
            {selectedProduct.map((p) => {
              <div class="carousel-item active">
                <div className="card-producto">
                  <img src={p.img} className="card-img-top" alt="..."></img>
                  <p>{p.item}</p>
                  <p>{p.price}</p>
                </div>
              </div>;
            })}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <button
          onClick={() => alert("proximamente")}
          type="submit"
          className="btn btn-dark"
        >
          Agregar al carro
        </button>
      </div>
    </form>
  );
};
