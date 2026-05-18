// AllProducts.jsx

import { useContext } from "react";
import "./App.css";
import { BillingContext } from "./App";

function AllProducts() {
  const { productList, handleGenerateBills } = useContext(BillingContext);

  return (
    <>
      <div className="allProducts">
        <h2>Added Products</h2>

        <table>
          <thead>
            <tr>
              <th>SL</th>
              <th>Product Name</th>
              <th>QTY</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {productList.map((element, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{element.ProductName}</td>
                <td>{element.QTY}</td>
                <td>Rs. {element.Total}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button onClick={handleGenerateBills}>Generate Bill</button>
      </div>
    </>
  );
}

export default AllProducts;
