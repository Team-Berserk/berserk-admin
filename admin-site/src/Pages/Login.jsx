import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../Clients";
import { AuthContext } from "../Providers/AuthProvider";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { verifyToken } = useContext(AuthContext);
  const Navigator = useNavigate();

  const onSubmit = () => {
    instance
      .post("/login", {
        username,
        password,
      })
      .then((response) => {
        window.localStorage.setItem("token", response.data);
        verifyToken();
        Navigator("/");
      });
  };

  return (
    <div className="flex flex-col p-28 justify-center items-center h-screen">
      <div className="flex p-10 justify-center items-center gap-20 shadow-2xl bg-white rounded-xl w-80 md:w-fit">
        <div className="rounded-2xl">
          <div className="w-72 md:w-80">
            <h1 className="text-xl md:text-2xl text-center m-2 font-semibold">
              Soddent management
            </h1>
          </div>
          <div className="flex flex-col h-fit w-72 md:w-80">
            <h5 className="text-base md:text-md mt-3">Хэрэглэгчийн нэр</h5>
            <input
              placeholder="Хэрэглэгчийн нэр"
              onChange={(e) => setUsername(e.target.value)}
              className="border-2 rounded-2xl p-2.5 outline-none focus:ring"
            />
            <h5 className="text-base md:text-md mt-3">Нууц үг</h5>
            <input
              placeholder="Нууц үг"
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 rounded-2xl p-2.5 outline-none focus:ring"
            />
            <button
              onClick={() => onSubmit()}
              className="bg-sky-300 rounded-2xl hover:bg-sky-400 active:bg-sky-500 my-6 p-2.5"
            >
              Нэвтрэх
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
