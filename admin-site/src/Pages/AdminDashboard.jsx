import { useEffect, useState } from "react";
// import { DataContext } from "../Providers/DataContext";
import { UserManager } from "../Components/UserManager";
import { instance } from "../Clients";
import { utils } from "@amir04lm26/react-modern-calendar-date-picker";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = [
  { value: "644a501b83fa5beca3d465b3", label: "Энхжин" },
  { value: "644a502083fa5beca3d465b5", label: "Ангирмаа" },
  { value: "644a4eb0ccd779809ac1c3fe", label: "Энхбаяр" },
  { value: "644a502b83fa5beca3d465b9", label: "Баярмаа" },
];

export const Dashboard = () => {
  // const { allRequests } = useContext(DataContext);
  const [users, setUsers] = useState(null);
  const [awagdsn, setAwagdsn] = useState(0);
  const [doc, setDoc] = useState(options[2].value);
  const [docindex, setDocIndex] = useState(options[2].value);
  const [udur, setDate] = useState(null);
  const getDocsUsers = (date, doc) => {
    instance.put("manage/" + doc, { date }).then((response) => {
      console.log(doc, date);
      console.log(Object.entries(response.data.placeholder));
      setUsers(Object.entries(response.data.placeholder));
      let num = 0;
      console.log(date);
      Object.entries(response.data.placeholder).forEach((item) => {
        if (item[1]._id) {
          num++;
        }
      });
      setAwagdsn(num);
    });
  };

  useEffect(() => {
    const day = utils().getToday();
    const date = `${day.year}-${day.month < 10 ? "0" : ""}${day.month}-${
      day.day < 10 ? "0" : ""
    }${day.day}`;
    setDate(date);
    getDocsUsers(udur, doc);
  }, []);

  useEffect(() => {
    setUsers(null);
    getDocsUsers(udur, doc);
    console.log(udur, doc);
  }, [doc, udur]);

  return (
    <div className="h-screen bg-slate-50 pt-24 p-8 flex justify-center">
      <div className="w-full h-fit max-w-3xl">
        <h1 className=" font-bold text-xl">Soddent clinic admin dashboard.</h1>
        <div className="flex gap-8 pt-5">
          <div className=" w-1/3 p-3  bg-gradient-to-r from-cyan-500 to-blue-500 h-20 rounded-md">
            <h3 className="text-2xl  px-2 font-bold text-white">{`${awagdsn}`}</h3>
            <p className="text-white">Авагдсан цаг</p>
          </div>
          <div className=" w-1/3 p-3  bg-gradient-to-r from-cyan-500 to-blue-500 h-20 rounded-md">
            <h3 className="text-2xl  px-2 font-bold text-white">{`${
              8 - awagdsn
            }`}</h3>
            <p className="text-white">Сул цаг</p>
          </div>
          <div className=" w-1/3 p-3  bg-gradient-to-r from-cyan-500 to-blue-500 h-20 rounded-md">
            <h3 className="text-2xl  px-2 font-bold text-white">69</h3>
            <p className="text-white">Ямар нэг юм </p>
          </div>
        </div>
        <h1 className=" font-bold text-xl mt-16 text-center m-5">
          Өнөөдрийн үйлчлүүлэгчид
        </h1>
        <Dropdown
          options={options}
          onChange={(e) => {
            setDoc(e.value);
          }}
          value={options[2]}
          className="w-1/3 rounded-md"
        />
        <div className="h-[400px] bg-slate-200 mt-8 rounded-2xl pb-10">
          <div className="h-10 w-full flex align-middle  p-4 pt-2 pr-16">
            <p className="w-32">Нэр</p>
            <p className="w-40">Ирц</p>
            <p className="w-48">Утасны Дугаар </p>
            <p className="w-32">Өдөр</p>
            <p className="w-42">Цаг</p>
          </div>
          {users ? (
            users.map((user, index) => {
              return <UserManager key={user._id} user={user} index={index} />;
            })
          ) : (
            <div className="flex justify-center items-center h-full">
              <div className="animate-spin inline-block w-12 h-12 border-[6px] border-current border-t-transparent text-gray-400 rounded-full">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
