import { createContext, useEffect, useState } from "react";
import { instance } from "../Clients";

export const AuthContext = createContext();

export const AuhtProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const verifyToken = () => {
    instance.get("verify").then((response) => {
      if (response.data === "Token Required") return console.log(response.data);
      if (response.data === "Expired") return console.log("Token Expired");
      setUserData(response.data);
      console.log(`Logged in as ${response.data.username}`);
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
