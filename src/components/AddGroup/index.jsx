import "./addgroup.css";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

export const AddGroup = () => {
  const [subject, setSubject] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [days, setDays] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [time, setTime] = useState("");
  const [image, setImage] = useState(null);

  //////////////////////////////////////////

  const handleImg = (event) => {
    setImage(event.target.files[0]);
  };

  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "chatImages");

  const handleData = async (e) => {
    e.preventDefault();

    fetch("https://api.cloudinary.com/v1_1/dev4pmh5c/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        {
          fetch("http://localhost:4001/add_group", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              token: localStorage.getItem("token"),
            },
            body: JSON.stringify({
              teacherImage: data.url,
              GroupSubject: subject,
              ClassDays: days,
              ClassTime: time,
              TeacherName: teacherName,
              TeacherPhoneNumber: phoneNumber,
            }),
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
            })
            .catch((error) => console.log(error));
          setTimeout(() => {
            location.reload()
          },3500)
        }
      });
  };

  return (
    <div className="group">
       <ToastContainer />
      <h2 className="group_paragraph">Add New Account</h2>
      <form className="sudent_form" onSubmit={handleData}>
        <div className="group_box_wrapper">
          <div className="group_form_box">
            <label htmlFor="subject" className="group_label">
              Company Name
              <input
                type="text"
                className="group_input"
                placeholder="New Company"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </label>
            <label htmlFor="subject" className="group_label">
              City
              <input
                type="text"
                className="group_input"
                placeholder="City Name"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </label>
            <label htmlFor="subject" className="group_label">
              User
              <input
                type="text"
                className="group_input"
                placeholder="User assigned"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </label>
            

            
          </div>
          <div className="group_form_box">
            <label htmlFor="days" className="group_label">
              Class Days
              <select
                className="group_select"
                defaultValue=""
                onChange={(e) => setDays(e.target.value)}
              >
                <option value="Monday" className="group_option">
                  Monday
                </option>
                <option value="Tuesday" className="group_option">
                  Tuesday
                </option>
                <option value="Wednesday" className="group_option">
                  Wednesday
                </option>
                <option value="Thursday" className="group_option">
                  Thursday
                </option>
                <option value="Friday" className="group_option">
                  Friday
                </option>
                <option value="Saturday" className="group_option">
                  Saturday
                </option>
                <option value="Sunday" className="group_option">
                  Sunday
                </option>
              </select>
            </label>
            <label htmlFor="phoneNumber" className="group_label">
              Contact Number
              <input
                type="number"
                className="group_input"
                placeholder="+91 *** *** ****"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </label>
            <label htmlFor="subject" className="group_label">
              Email
              <input
                type="text"
                className="group_input"
                placeholder="Email Id"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </label>
          </div>
          <div className="group_form_box">
            <label className="group_label" htmlFor="time">
              Class Time
              <input
                type="date"
                className="group_input"
                placeholder="Load"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </label>
           {/* <label htmlFor="image" className="group_label">
              Teacher Image (3x4)
              <input
                type="file"
                className="group_input group_input_extra"
                placeholder="Upload"
                id="image"
                onChange={(e) => handleImg(e)}
              />
  </label>*/}
            <button className="group_btn" type="submit">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
