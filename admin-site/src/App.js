import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./Pages/Login";
import { Dashboard } from "./Pages/AdminDashboard";
import { useContext } from "react";
import { AuthContext } from "./Providers/AuthProvider";
import { Unauthorized } from "./Pages/401";
import { NotFound } from "./Pages/404";

function App() {
  const { userData } = useContext(AuthContext);
  // console.log(userData);
  return (
    <div className="bg-BG bg-fixed bg-cover bg-center bg-no-repeat">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Login />} />
        <Route path="/dash-main" element={userData ? <Dashboard /> : <Unauthorized/>} />
      </Routes>
    </div>
  );
}

export default App;
