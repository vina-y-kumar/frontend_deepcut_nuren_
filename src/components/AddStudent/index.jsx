import "./addStudent.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

export const AddStudent = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [Industry, setIndustry] = useState("");
  const [companyName, setCompanyName] = useState("");

  const [image, setImage] = useState(null);
  const [data, setData] = useState([]);
  const [email,setEmail]=useState("");
  const [website,setWebsite]=useState("");

  //////////////////////////////////////////

  const handleImg = (event) => {
    setImage(event.target.files[0]);
  };

  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "chatImages");

  const handleData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/accounts/', {
        Name: name,
        email: email,
        phone: number,
        industry: Industry,
        company:companyName,
        website: website,
        createdBy:1,
        assigned_to:[1,2],
      }, {
        headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem('token'),
        },
      });
  
      toast.info(response.data.msg, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
  
      setTimeout(() => {
        location.reload();
      }, 3500);
    } catch (error) {
      console.error('Error creating account:', error);
      // Handle error - display error message, etc.
    }
  };

  /////////////////////////////////////////////////

  useEffect(() => {
    fetch(`http://localhost:4001/get_groups`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data1) => setData(data1))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="student">
       <ToastContainer />
      <h2 className="student_paragraph">Add New Client</h2>
      <form className="sudent_form" onSubmit={handleData}>
        <div className="student_box_wrapper">
          <div className="student_form_box">
            <label htmlFor="name" className="student_label">
              Client Name
            </label>
            <input
              type="text"
              className="student_input"
              placeholder="Name Surname"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="parentName" className="student_label">
              Company Name
            </label>
            <input
              type="text"
              className="student_input"
              placeholder="Company's Name"
              id="parentName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div className="student_form_box">
            <label htmlFor="number" className="student_label">
              Phone Number
            </label>
            <input
              type="number"
              className="student_input"
              placeholder="+91 *** *** ****"
              id="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <label htmlFor="parentNumber" className="student_label">
              Company Email
            </label>
            <input
              type="email"
              className="student_input"
              placeholder="email@xyz.abc"
              id="parentNumber"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="student_form_box">
          <label className="student_label" htmlFor="subject">
            Industry
          </label>
          <select
            className="student_select"
            onChange={(e) => setIndustry(e.target.value)}
            defaultValue=""
          >
            <option value="" disabled>Select an industry</option>
            <option value="FINANCE">FINANCE</option>
            <option value="HEALTHCARE">HEALTHCARE</option>
            <option value="INSURANCE">INSURANCE</option>
            <option value="LEGAL">LEGAL</option>
            <option value="MANUFACTURING">MANUFACTURING</option>
            <option value="PUBLISHING">PUBLISHING</option>
            <option value="REAL ESTATE">REAL ESTATE</option>
            <option value="SOFTWARE">SOFTWARE</option>
          </select>

            <label htmlFor="image" className="student_label">
              Image 3x4
            </label>
            <input
              type="file"
              className="student_input student_input_extra"
              placeholder="Upload"
              id="image"
              onChange={(e) => handleImg(e)}
            />
            <button className="student_btn" type="submit">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
