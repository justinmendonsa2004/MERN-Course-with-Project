import "./App.css";

function GeneratedBills({
  productList,
  ResetBills,
  customerName,
  customerPhone,
}) {
  return (
    <>
      <div className="generatedBillBox">
        <h1>Generated Bills</h1>
        <div className="customerBox">
          <p>
            <b>Customer Name:</b>
            {customerName} <b>Contact:</b>
            {customerPhone}
          </p>
        </div>
        <div className="allProducts">
          <table>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>QTY</th>
              <th>Total</th>
            </tr>
            {productList.map((element, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{element.ProductName}</td>
                <td>{element.QTY}</td>
                <td>{element.Total}</td>
              </tr>
            ))}
          </table>
          <button id="Button" onClick={ResetBills}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default GeneratedBills;
