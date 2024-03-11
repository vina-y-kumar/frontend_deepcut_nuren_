import "./addpayment.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

export const AddPayment = () => {
  const [studentName, setStudentName] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [subject, setSubject] = useState("");
  const [paymentDay, setPaymentDay] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [data, setData] = useState([]);

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

  const handlePayment = (evt) => {
    evt.preventDefault()
    fetch(`http://localhost:4001/add_paymentor`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        studentName: studentName,
        subject: subject,
        phoneNumber: phoneNumber,
        teacherName: teacherName,
        paymentDay: paymentDay,
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
      .catch((error) => console.error(error));
      setTimeout(() => {
        location.reload()
      },3500)
  };

  return (
    <div className="payment">
       <ToastContainer />
      <h2 className="payment_paragraph">New Lead</h2>
      <form className="sudent_form" onSubmit={handlePayment}>
        <div className="payment_box_wrapper">
          <div className="payment_form_box">
            <label htmlFor="studentName" className="payment_label">
             Name
              <input
                type="text"
                className="payment_input"
                placeholder="Student Name"
                id="studentName"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
              />
            </label>
            <label htmlFor="teacherName" className="payment_label">
              Teacher Name
              <input
                type="text"
                className="payment_input"
                placeholder="Teacher Name"
                id="teacherName"
                value={teacherName}
                onChange={(e) => setTeacherName(e.target.value)}
              />
            </label>
          </div>
          <div className="payment_form_box">
            <label htmlFor="subject" className="payment_label">
              Subject
              <select
                className="payment_select"
                onChange={(e) => setSubject(e.target.value)}
                defaultValue=""
              >
                {data.length &&
                  data.map((element, idx) => (
                    <option key={idx} value={element.GroupSubject} className="payment_option">
                      {element.GroupSubject}
                    </option>
                  ))}
              </select>
            </label>
            <label htmlFor="paymentDay" className="payment_label">
              Payment Day
              <input
                type="date"
                className="payment_input"
                placeholder="Payment Day"
                id="paymentDay"
                value={paymentDay}
                onChange={(e) => setPaymentDay(e.target.value)}
              />
            </label>
          </div>
          <div className="payment_form_box">
            <label className="payment_label" htmlFor="phoneNumber">
              Phone Number
              <input
                type="number"
                className="payment_input"
                placeholder="+91 *** *** *****"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </label>
            <button className="payment_btn" type="submit">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
