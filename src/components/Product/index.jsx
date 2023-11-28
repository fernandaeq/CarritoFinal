import { useState } from "react";
import "./styles.css";
function Product(props) {
  const [count, setCount] = useState(1);
  function addItem() {
    setCount(count + 1);
    props.setTotalPrice((prevItem) => {
      return prevItem + Number(props.costo);
    });
  }
  function removeItem() {
    if (count > 1) {
      setCount(count - 1);

      props.setTotalPrice((prevItem) => {
        return prevItem - Number(props.costo);
      });
    }
  }
  function deleteItem(id) {
    props.deleteItem(id);
    props.setTotalPrice((prevItem) => {
      return prevItem - count * props.costo;
    });
  }
  return (
    <div className="product">
      <h3 onClick={() => deleteItem(props.title)}>X</h3>
      <h2>{props.title}</h2>
      <p className="emptyDescription">{props.descripcion}</p>
      <h3>${props.costo}</h3>
      <div className="button">
        <input
          type="submit"
          value="-"
          className="addButton2"
          onClick={removeItem}
        />
        <h3>{count}</h3>
        <input
          type="submit"
          value="+"
          className="addButton2"
          onClick={addItem}
        />
      </div>
    </div>
  );
}
export default Product;
