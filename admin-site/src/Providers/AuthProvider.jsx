import { createContext, useEffect, useState } from "react";
import { instance } from "../Clients";

export const AuthContext = createContext();

export const AuhtProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const verifyToken = () => {
    const token = window.localStorage.token;
    instance
      .get("verify", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        if (response.data === "Token Required")
          return console.log("Why No Token!");
        setUserData(response.data);
        // console.log(response.data);
      });
  };
  useEffect(() => {
    verifyToken();
  }, []);
  return (
    <AuthContext.Provider value={{ verifyToken, userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
