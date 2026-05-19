import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "./UserContext";

function About() {
  const { isLogged, setIsLogged } = useContext(userContext);
  const navigation = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigation("/login"); //this are protector routing ,when user login after we get details about user,other wise we dont get any details about user.
    }
  }, []);
  return <div>About</div>;
}

export default About;
