import { useState } from "react";
import "./styles.css";
function NewProduct(props) {
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    props.setValue((values) => ({ ...values, [name]: value }));
  };

  const guardarProduct = (event) => {
    event.preventDefault();
    if (
      props.listData.some((itemInList) => {
        return itemInList.nombre == props.value.nombre;
      })
    ) {
      return;
    }
    props.setList([...props.listData, props.value]);
    props.setTotalPrice((prevState) => {
      return prevState + Number(props.value.precio);
    });
  };

  return (
    <div className="carga">
      <form onSubmit={guardarProduct}>
        <h1 className="title">Cargar Producto</h1>
        <input
          type="text"
          id="fname"
          name="nombre"
          onChange={handleChange}
          required
        />
        <br></br>
        <label htmlFor="fname">Nombre del Producto:</label>
        <br></br>
        <input
          type="text"
          id="lname"
          name="descripcion"
          onChange={handleChange}
        />
        <br></br>
        <label htmlFor="lname">Descripcion (Opcional)</label>
        <br></br>
        <input
          type="number"
          id="lname"
          name="precio"
          onChange={handleChange}
          min="1"
          required
        />
        <br></br>
        <label htmlFor="lname">Precio:</label>
        <br></br>
        <div className="button">
          <input type="submit" value="Agregar" className="addButton" />
        </div>
      </form>
    </div>
  );
}
export default NewProduct;
