import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "./UserContext";

function Login() {
  const [username, SetUsername] = useState("");
  const [password, Setpassword] = useState("");

  const { isLogged, setIsLogged } = useContext(userContext);

  const navigation = useNavigate();

  useEffect(() => {
    if (isLogged) {
      navigation("/home"); //conditional routing.....
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "12345") {
      setIsLogged(true);
      navigation("/home");
    } else {
      alert("Username or Password is not valid");
      Setpassword("");
    }
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => SetUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => Setpassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
      </form>
    </>
  );
}

export default Login;
