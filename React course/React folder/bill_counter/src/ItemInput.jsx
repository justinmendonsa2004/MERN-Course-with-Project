// ItemInput.jsx

import { useContext } from "react";
import "./App.css";
import { BillingContext } from "./App";

function ItemInput() {
  const {
    ProductName,
    ProductPrice,
    ProductQTY,
    setProductName,
    setProductQTY,
    setProductPrice,
    handleAddButton,
  } = useContext(BillingContext);

  return (
    <>
      <div className="itemInput">
        <div className="productNamebox">
          <label htmlFor="productname">Product Name:</label>

          <input
            type="text"
            name="productname"
            value={ProductName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        <div className="productQtyBox">
          <label htmlFor="productQTY">QTY:</label>

          <input
            type="number"
            name="productQTY"
            value={ProductQTY}
            onChange={(e) => setProductQTY(Number(e.target.value))}
          />
        </div>

        <div className="productQtyBox">
          <label htmlFor="productprice">Price:</label>

          <input
            type="number"
            name="productprice"
            value={ProductPrice}
            onChange={(e) => setProductPrice(Number(e.target.value))}
          />
        </div>

        <div className="TotalAmount">
          <p>
            <b>Total:</b> Rs. {ProductPrice * ProductQTY}
          </p>
        </div>

        <div className="AddItemBox">
          <button onClick={handleAddButton}>Add Item</button>
        </div>
      </div>
    </>
  );
}

export default ItemInput;
