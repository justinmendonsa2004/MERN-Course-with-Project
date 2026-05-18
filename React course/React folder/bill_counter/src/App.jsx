// App.jsx

import { createContext, useState } from "react";
import "./App.css";
import AllProducts from "./AllProducts";
import ItemInput from "./ItemInput";
import GeneratedBills from "./GeneratedBills";

export const BillingContext = createContext();

function App() {
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("+91");
  const [ProductName, setProductName] = useState("");
  const [ProductQTY, setProductQTY] = useState("");
  const [ProductPrice, setProductPrice] = useState("");
  const [productList, setProductList] = useState([]);
  const [showGeneratedBill, setShowGeneratedBill] = useState(false);

  const handleAddButton = () => {
    if (ProductName === "" || ProductQTY <= 0 || ProductPrice <= 0) {
      alert("Please enter valid product details");
      return;
    }

    let obj1 = {
      ProductName: ProductName,
      QTY: ProductQTY,
      Total: ProductQTY * ProductPrice,
    };

    setProductList([...productList, obj1]);

    setProductName("");
    setProductQTY("");
    setProductPrice("");
  };

  const handleGenerateBills = () => {
    if (productList.length > 0) {
      setShowGeneratedBill(true);
    }
  };

  const ResetBills = () => {
    setProductList([]);
    setCustomerName("");
    setCustomerPhone("+91");
    setProductName("");
    setProductQTY("");
    setProductPrice("");
    setShowGeneratedBill(false);
  };

  return (
    <>
      <BillingContext.Provider
        value={{
          ProductName,
          ProductQTY,
          ProductPrice,
          setProductName,
          setProductQTY,
          setProductPrice,
          handleAddButton,
          productList,
          ResetBills,
          customerName,
          customerPhone,
          handleGenerateBills,
        }}
      >
        <div className="Billcalculate">
          <h1>Billing Counter</h1>

          <div className="customerdetails">
            <div className="customername">
              <label htmlFor="name">Customer Name:</label>

              <input
                type="text"
                name="name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
            </div>

            <div className="customerPhone">
              <label htmlFor="contact">Customer Phone:</label>

              <input
                type="text"
                name="contact"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
              />
            </div>
          </div>

          {productList.length > 0 && <AllProducts />}

          <ItemInput />

          {showGeneratedBill && <GeneratedBills />}
        </div>
      </BillingContext.Provider>
    </>
  );
}

export default App;
