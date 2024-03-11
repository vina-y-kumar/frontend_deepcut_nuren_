import "./apealtwolist.css";
import Delete from "../../assets/delete.png";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ApealTwoList = () => {
  const [data, setData] = useState([]);
  const nowDate = new Date();

  useEffect(() => {
    fetch("http://localhost:4001/get_telegram_message_by_day", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:4001/delete_telegram_message/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.info(data.msg, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setTimeout(() => {
          location.reload();
        }, 3500);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="apeal_list">
       <ToastContainer />
      <div className="apeal_list_header">
        <h3 className="apeal_list_paragraph">
          {nowDate.getDate()}.{nowDate.getMonth() + 1}.{nowDate.getFullYear()}{" "}
          Daily Appeals
        </h3>
      </div>
      <div className="apeal_list_box">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="appeal_one">
                #
              </th>
              <th scope="col" className="thead_th">
                Student Name
              </th>
              <th scope="col" className="thead_th">
                Username
              </th>
              <th scope="col" className="thead_th">
                Date
              </th>
              <th className="long_text" scope="col">
                Text
              </th>
              <th scope="col" className="appeal_one">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="tbody">
            {data.length &&
              data.map((element, idx) => (
                <tr key={idx} className="appeal_tr">
                  <td className="appeal_one" scope="col">
                    {idx + 1}
                  </td>
                  <td className="appeal_td">{element.firstName}</td>
                  <td className="appeal_td">@{element.userName}</td>
                  <td className="appeal_td">
                    {element.date} | {element.time}
                  </td>
                  <td className="long_text">{element.text}</td>
                  <td className="appeal_one">
                    <img
                      src={Delete}
                      alt="delete"
                      className="table_img"
                      width={18}
                      height={18}
                      onClick={() => handleDelete(element.id)}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
