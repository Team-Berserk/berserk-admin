import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./Pages/Login";
import { Dashboard } from "./Pages/AdminDashboard";
import { useContext } from "react";
import { AuthContext } from "./Providers/AuthProvider";
import { Unauthorized } from "./Pages/401";

function App() {
  const { userData } = useContext(AuthContext);
  // console.log(userData);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Unauthorized />}></Route>
        <Route path="/" element={userData ? <Dashboard /> : <Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
