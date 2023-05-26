import { Route, Routes } from "react-router-dom";
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
    <div className="bg-BG bg-fixed bg-cover bg-center bg-no-repeat">
      <Routes>
        <Route path="*" element={<Unauthorized />} />
        <Route path="/" element={userData ? <Dashboard /> : <Login />} />
      </Routes>
    </div>
  );
}

export default App;
