import { Link } from "react-router-dom";

export const Unauthorized = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full h-96 flex flex-col items-center">
        <h1 className="text-center text-8xl font-bold font-sans p-4 text-blue-500">
          401
        </h1>
        <h2 className="font-2xl pb-5 m-0 font-semibold">
          Error - Unauthorized Access
        </h2>
        <Link to="/">
          <button className="font-semibold text-white w-48 bg-blue-500 p-4 rounded-xl">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};
