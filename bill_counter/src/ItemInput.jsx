import "./App.css";

function ItemInput({
  ProductName,
  ProductQTY,
  ProductPrice,
  setProductName,
  setProductQTY,
  setProductPrice,
  handleAddButton,
}) {
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
            onChange={(e) => setProductQTY(e.target.value)}
          />
        </div>
        <div className="productQtyBox">
          <label htmlFor="productprice">Price:</label>
          <input
            type="number"
            name="productprice"
            value={ProductPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        <div className="TotalAmount">
          <p>
            <b>Total:</b>
            Rs.{ProductPrice * ProductQTY}
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
