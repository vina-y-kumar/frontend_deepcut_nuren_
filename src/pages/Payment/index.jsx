import bell_icon from "../../assets/bell-icon.png";
import message_icon from "../../assets/message-icon.png";
import person_icon from "../../assets/person-icon.png";
import phone_icon from "../../assets/phone-icon.jpg";
import { Sidebar } from "../../components/Sidebar";

import "./payment.css";

import { AddPayment } from "../../components/AddPayment";
import { PaymentsList } from "../../components/PaymentList";
import Kanban from "../../components/Kanban/Kanban";
// import KanbanBoard from "../../components/Kanban/Kanban";

export const Payment = () => {
  return (
  <div className="head-section">
    <div className="pay_left_box">
            <Sidebar />
          </div>

    <div className="head">
    
      <div className="icon">
      <div className="upper" ><img className="phone-icon"src={phone_icon}/></div>
      <div className="upper" ><img className="message-icon" src={message_icon}/></div>
      <div className="upper" ><img className="bell-icon" src={bell_icon}/></div>
      <div className="upper" ><img className="person-icon" src={person_icon}/></div>
      </div>
      <div className="pay_right_box">
            <h1  className="main-text">Leads</h1>

      <div className="button">
        <button className="New"  type="button"> <span className=" plus">+</span> 
        New</button>

          <div className="pay_right_box">
            <Header name="Leads" />
            
            <div className="pay_right_box_inner">
              <h3>Total Leads: 25</h3>
            <button className="btn">+ New</button>
              {/* <AddPayment/> */}
              {/* <KanbanBoard/> */}
              <Kanban/>
              {/* <PaymentsList/> */}
            </div>
          </div>

        </div>
       <div>
        </div> 
          
            
      </div>
         
    </div>
    </div>
    

    
  

  );
};
