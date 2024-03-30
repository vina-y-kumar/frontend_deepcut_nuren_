import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Icon1 from "../../assets/image1dp.png";
import Icon2 from "../../assets/image2dp.png";
import Icon3 from "../../assets/image3dp.png";
import Icon4 from "../../assets/image4dp.png";
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
        <NavLink to="/all_students" className="card_1 card">
        <div className="card_one">
            <img
              src={Icon4}
              alt="icon"
              className="card_img"
              width={100}
              height={100}
            />
          </div>
          <div className="card_two">
          <p className="card_text_1">$5K{/*{studentData.length}*/}</p>
            <p className="card_paragraph">Closed Deals</p>
            
          </div>
        
        </NavLink>
        <NavLink to="/all_teachers" className="card_2 card">
        <div className="card_one">
            <img
              src={Icon3}
              alt="icon"
              className="card_img"
              width={100}
              height={100}
            />
          </div>
          <div className="card_two">
          <p className="card_text_2">20{/*{teacherData.length}*/}</p>
            <p className="card_paragraph">New Deals</p>
            
          </div>
        
        </NavLink>
     
      
        <NavLink to="/all_deleted_students" className="card_3 card">
        <div className="card_one">
            <img
              src={Icon2}
              alt="icon"
              className="card_img"
              width={100}
              height={100}
            />
          </div>
          <div className="card_two">
          <p className="card_text_3">$10K{/*{deletedStudents.length}*/}</p>
            <p className="card_paragraph">Estimated Revenue</p>
            
          </div>
          
        </NavLink>
        <div className="card_4 card">
        <div className="card_one">
            <img
              src={Icon1}
              alt="icon"
              className="card_img"
              width={100}
              height={100}
            />
          </div>
          <div className="card_two">
          <p className="card_text_4">$10K{/*{groups.length}*/}</p>
            <p className="card_paragraph">Estimated Profit</p>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};
