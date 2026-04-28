import { useState } from "react";
import "./App.css";
import AllProducts from "./AllProducts";
import ItemInput from "./ItemInput";
import GeneratedBills from "./GeneratedBills";
function App() {
  const [customerName, setcustomerName] = useState("");
  const [customerPhone, setcustomerPhone] = useState("+91");
  const [ProductName, setProductName] = useState("");
  const [ProductQTY, setProductQTY] = useState(0);
  const [ProductPrice, setProductPrice] = useState(0);
  const [productList, setProductList] = useState([]);
  const [showGeneratedBill, setShowGeneratedBills] = useState(false);

  const handleAddButton = () => {
    let obj1 = {
      ProductName: ProductName,
      QTY: ProductQTY,
      Total: ProductQTY * ProductPrice,
    };
    setProductList([...productList, obj1]);
    setProductName("");
    setProductQTY(0);
    setProductPrice(0);
  };

  const handleGeneretBills = () => {
    if (!showGeneratedBill) {
      setShowGeneratedBills(true);
    }
  };

  const ResetBills = () => {
    setProductList([]);
    setcustomerName("");
    setcustomerPhone("+91");
    setProductName("");
    setProductQTY(0);
    setProductPrice(0);
  };

  return (
    <>
      <div className="Billcalculate">
        <h1>Billing Counter</h1>
        <div className="customerdetails">
          <div className="customername">
            <label htmlFor="name">Customer Name:</label>
            <input
              type="text"
              name="name"
              value={customerName}
              onChange={(e) => setcustomerName(e.target.value)}
            />
          </div>
          <div className="customerPhone">
            <label htmlFor="contact">Customer Phone:</label>
            <input
              type="phone"
              name="contact"
              value={customerPhone}
              onChange={(e) => setcustomerPhone(e.target.value)}
            />
          </div>
        </div>
        {productList.length > 0 && (
          <AllProducts
            productList={productList}
            handleGeneretBills={handleGeneretBills}
          />
        )}
        <ItemInput
          ProductName={ProductName}
          ProductQTY={ProductQTY}
          ProductPrice={ProductPrice}
          setProductName={setProductName}
          setProductQTY={setProductQTY}
          setProductPrice={setProductPrice}
          handleAddButton={handleAddButton}
        />
        {showGeneratedBill && (
          <GeneratedBills
            productList={productList}
            ResetBills={ResetBills}
            customerName={customerName}
            customerPhone={customerPhone}
          />
        )}
      </div>
    </>
  );
}

export default App;
