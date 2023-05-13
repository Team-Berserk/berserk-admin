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
      {/* {user[1]._id ? (
        <p className=" w-40">irsen</p>
      ) : (
        <p className=" w-40">ireegui</p>
      )} */}
      <p className=" w-40">{user[1]._id && "Хүлээгдэж байна"}</p>
      <p className=" w-48">{user[1].Phonenumber}</p>
      <p className=" w-32">{user[1].Date}</p>
      <p>{user[0]}</p>
    </div>
  );
};
