import "./davomat.css";
// import Avatar from "../../assets/avatar.png";
import Done from "../../assets/done.png";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UnPayed from "../../assets/close.png";
import SwitchExample from "../Switches";

export const DavomatInfo = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const arr = [];

  useEffect(() => {
    fetch(`http://localhost:4001/get_full_info_group/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data1) => setData(data1))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:4001/all_students_info_group/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setData1(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="group_info">
      <span className="span">
        {data1.length &&
          data1.map(
            (element, idx) =>
              element.pay === true && (
                <p style={{ display: "none" }}>{arr.push(idx + 1)}</p>
              ) && <p>{arr.length}</p>
          )}
      </span>
      <div className="group_info_inner">
        <h2 className="group_info_paragraph" style={{ display: "flex" }}>
          {data.length &&
            data.map((element) => <p>{element.GroupYonalish} </p>)}{" "}
          - group list
        </h2>
        <div className="group_info_wrapper">
          <div className="group_info_left">
            {data.length &&
              data.map((element, idx) => (
                <div className="group_info_list_item" key={idx}>
                  <h4 className="group_info_list_card_paragraph">
                    {element.GroupYonalish}
                  </h4>
                  <div className="group_info_list_card_top">
                    <img
                      src={element.oqituvchiRasm}
                      alt="avatar"
                      className="group_info_list_card_img"
                      width={80}
                      height={80}
                    />
                    <span className="group_info_list_card_span">
                      <ul className="group_info_list_card_top_list">
                        <li className="group_info_list_card_top_item">
                          <p className="group_info_list_card_top_p">
                            Teacher:
                          </p>
                          <p className="group_info_list_card_top_text">
                            {element.Oqituvchi}
                          </p>
                        </li>
                        <li className="group_info_list_card_top_item">
                          <p className="group_info_list_card_top_p">
                            Phone number:
                          </p>
                          <p className="group_info_list_card_top_text">
                            {element.OqituvchTelNomer}
                          </p>
                        </li>
                      </ul>
                    </span>
                  </div>
                  <ul className="group_info_list_card_bottom_list">
                    <li className="group_info_list_card_bottom_item">
                      <p className="group_info_list_card_bottom_p">
                        Lesson days:
                      </p>
                      <p className="group_info_list_card_bottom_text">
                        {element.DarsKunlari}
                      </p>
                    </li>
                    <li className="group_info_list_card_bottom_item">
                      <p className="group_info_list_card_bottom_p">
                        Lesson time:
                      </p>
                      <p className="group_info_list_card_bottom_text">
                        {element.DarsVaqti}
                      </p>
                    </li>
                    <li className="group_info_list_card_bottom_item">
                      <p className="group_info_list_card_bottom_p">
                        Number of students:
                      </p>
                      <p className="group_info_list_card_bottom_text">
                        {data1.length} students
                      </p>
                    </li>
                    <li key={idx} className="group_info_list_card_bottom_item">
                      <p className="group_info_list_card_bottom_p">
                        Number of paid students:
                      </p>
                      <p>{arr.length} students</p>
                    </li>
                  </ul>
                </div>
              ))}
            <h4 className="group_info_left_paragraph">Students who did not attend</h4>
          </div>
          <div className="group_info_right">
            <div className="group_info_right_box">
              <ul className="group_info_right_list">
                <li className="group_info_right_item group_info_right_item_extra">
                  <p className="group_info_right_header_p group_info_right_header_p_extra">
                    №
                  </p>
                  <p className="group_info_right_header_p group_info_right_header_p_extra">
                    Student name
                  </p>
                  <p className="group_info_right_header_p group_info_right_header_p_extra">
                    attendance
                  </p>
                </li>
                {data1.length &&
                  data1.map((element, idx) => (
                    <div key={idx}>
                      <li className="group_info_right_item">
                        <p className="group_info_right_header_p">{idx + 1}</p>
                        <p className="group_info_right_header_p">
                          {element.name}
                        </p>
                        <SwitchExample/>
                      </li>
                      <hr />
                    </div>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
