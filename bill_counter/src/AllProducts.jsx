import "./App.css";

function AllProducts({ productList, handleGeneretBills }) {
  return (
    <>
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
        <button id="Button" onClick={handleGeneretBills}>
          Generate Bill
        </button>
      </div>
    </>
  );
}

export default AllProducts;
