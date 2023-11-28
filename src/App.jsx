import { useState } from "react";
import "./App.css";
import ListProducts from "./components/ListProducts";

import NewProduct from "./components/NewProduct";

function App() {
  const [inputs, setInputs] = useState({});
  const [list, setList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  function deleteItem(id) {
    setList((prevItems) => {
      return prevItems.filter((item, i) => {
        return item.nombre !== id;
      });
    });
  }

  return (
    <div className="main">
      <NewProduct
        value={inputs}
        setValue={setInputs}
        listData={list}
        setList={setList}
        setTotalPrice={setTotalPrice}
      />
      <ListProducts
        data={list}
        deleteItem={deleteItem}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
      />
    </div>
  );
}

export default App;
