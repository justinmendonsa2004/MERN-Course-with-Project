// GeneratedBills.jsx

import { useContext } from "react";
import "./App.css";
import { BillingContext } from "./App";

function GeneratedBills() {
  const { productList, ResetBills, customerName, customerPhone } =
    useContext(BillingContext);

  const grandTotal = productList.reduce((total, item) => total + item.Total, 0);

  return (
    <>
      <div className="generatedBillBox">
        <h1>Generated Bills</h1>

        <div className="customerBox">
          <p>
            <b>Customer Name:</b> {customerName}
          </p>

          <p>
            <b>Contact:</b> {customerPhone}
          </p>
        </div>

        <div className="allProducts">
          <table>
            <thead>
              <tr>
                <th>SL</th>
                <th>Name</th>
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

          <h2>Grand Total: Rs. {grandTotal}</h2>

          <button id="Button" onClick={ResetBills}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default GeneratedBills;
