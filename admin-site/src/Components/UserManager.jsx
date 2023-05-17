import { set } from "mongoose";
import { instance } from "../Clients";

export const UserManager = ({ user, func }) => {
  const setStatus = (status, id) => {
    instance.put("attendance", { requestId: id, status }).then((response) => {
      console.log(response.data);
      func();
    });
  };
  return (
    <div className=" bg-white w-full h-10 p-4 py-2 flex items-center">
      <p className="w-32">
        {user[1].Ownername ? (
          user[1].Ownername
        ) : (
          <span className="text-rose-500">Хоосон</span>
        )}
      </p>
      {!user[1]._id && <p className=" w-40"></p>}
      {user[1].Attendance === null && (
        <div className=" w-40 ">
          <p className="bg-slate-200 w-fit p-1   rounded-md">Хүлээгдэж байна</p>
        </div>
      )}
      {user[1].Attendance === true && (
        <div className=" w-40 text-teal-600">
          <p className="bg-teal-200 w-fit p-1   rounded-md">Ирсэн</p>
        </div>
      )}
      {user[1].Attendance === false && (
        <div className=" w-40 text-rose-800">
          <p className="bg-rose-200 w-fit p-1   rounded-md">Ирээгүй</p>
        </div>
      )}
      <p className=" w-48">{user[1].Phonenumber}</p>
      <p className=" w-32">{user[1].Date}</p>
      <p className="w-16">{user[0]}</p>
      {user[1]._id && (
        <button
          onClick={() => setStatus(true, user[1]._id)}
          className=" p-1 px-2 mr-3 bg-teal-200"
        >
          ✓
        </button>
      )}
      {user[1]._id && (
        <button
          onClick={() => setStatus(false, user[1]._id)}
          className="p-1 px-2 bg-rose-200"
        >
          X
        </button>
      )}
    </div>
  );
};
