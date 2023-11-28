import { useState } from "react";
import Product from "../Product";
import "./styles.css";

function ListProducts(props) {
  const listaDeProductos = props.data;
  return (
    <div className="list">
      <div className="header">
        <h1>Listado de Productos</h1>
        <div className="total">
          <span className="material-symbols-outlined" id="carrito">
            shopping_cart
          </span>
          <h3> ${props.totalPrice}</h3>
        </div>
      </div>
      <div className="content">
        {listaDeProductos.map((i, b) => {
          return (
            <Product
              deleteItem={props.deleteItem}
              setTotalPrice={props.setTotalPrice}
              key={b}
              title={i.nombre}
              descripcion={i.descripcion}
              costo={i.precio}
            />
          );
        })}
      </div>
    </div>
  );
}
export default ListProducts;
