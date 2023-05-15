export const UserManager = ({ user, index }) => {
  return (
    <div className=" bg-white w-full h-10 p-4 py-2 flex ">
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
          <p className="bg-slate-400 w-fit p-1   rounded-md">Хүлээгдэж байна</p>
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
      <p>{user[0]}</p>
    </div>
  );
};
