import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Icon from "../../assets/icon.png";
import "./card.css";

export const Card = () => {
  const [studentData, setStudentData] = useState([]);
  const [teacherData, setTeacherData] = useState([]);
  const [groups, setGroups] = useState([]);
  const [deletedStudents, setDeletedStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4001/get_deleted", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setDeletedStudents(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:4001/get_groups", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setGroups(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:4001/get_students", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setStudentData(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:4001/get_teacher", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setTeacherData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="card_wrapper">
      <div className="card_wrapper_inner">
        <NavLink to="/all_students" className="card">
          <div className="card_one">
            <h3 className="card_paragraph">Total number of Clients:</h3>
            <p className="card_text">{studentData.length}</p>
          </div>
          <div className="card_two">
            <img
              src={Icon}
              alt="icon"
              className="card_img"
              width={100}
              height={100}
            />
          </div>
        </NavLink>
        <NavLink to="/all_teachers" className="card1 card">
          <div className="card_one">
            <h3 className="card_paragraph">Total number of Companies:</h3>
            <p className="card_text">{teacherData.length}</p>
          </div>
          <div className="card_two">
            <img
              src={Icon}
              alt="icon"
              className="card_img"
              width={100}
              height={100}
            />
          </div>
        </NavLink>
      </div>
      <div className="card_wrapper_inner">
        <NavLink to="/all_deleted_students" className="card">
          <div className="card_one">
            <h3 className="card_paragraph">Number of Leads:</h3>
            <p className="card_text">{deletedStudents.length}</p>
          </div>
          <div className="card_two">
            <img
              src={Icon}
              alt="icon"
              className="card_img"
              width={100}
              height={100}
            />
          </div>
        </NavLink>
        <div className="card1 card">
          <div className="card_one">
            <h3 className="card_paragraph">Total number of groups</h3>
            <p className="card_text">{groups.length}</p>
          </div>
          <div className="card_two">
            <img
              src={Icon}
              alt="icon"
              className="card_img"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
