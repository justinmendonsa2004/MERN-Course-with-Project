import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const handlesubmit = (ele) => {
    ele.preventDefault();
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validEmail = regex.test(username);
    if (!validEmail) {
      alert("invalid Email");
    } else if (username && password) {
      alert("login succesfull");
    } else {
      alert("Enter username and password");
    }
  };

  const handleUsername = (e) => {
    setUsername(e);
  };
  const handlePassword = (e) => {
    setpassword(e);
  };
  return (
    <>
      <div className="formBox">
        <form>
          <div className="usernameBox">
            <label htmlFor="username">username</label>
            <input
              type="text"
              value={username}
              name="username"
              onChange={(e) => handleUsername(e.target.value)}
            />
          </div>
          <div className="passwordBox">
            <label htmlFor="password">password</label>
            <input
              type="password"
              value={password}
              name="password"
              onChange={(e) => handlePassword(e.target.value)}
            />
          </div>
          <div className="submitBox">
            <button onClick={handlesubmit}>Login</button>
          </div>
        </form>
      </div>
    </>
  );
}
export default App;
