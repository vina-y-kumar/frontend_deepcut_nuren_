import bell_icon from "../../assets/bell-icon.png";
import message_icon from "../../assets/message-icon.png";
import person_icon from "../../assets/person-icon.png";
import phone_icon from "../../assets/phone-icon.jpg";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";

import "./LeadPage.css";



import Kanban from "../../components/Kanban/Kanban";
import { NavLink } from "react-router-dom";
// import KanbanBoard from "../../components/Kanban/Kanban";

export const LeadPage = () => {
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
    
      

          
            <Header name="Leads" />
            
          
              <h3 >Total Leads: 25</h3>

            <NavLink to="/addlead" id="btn">+ New</NavLink>
            <br/>
              {/* <AddPayment/> */}
              {/* <KanbanBoard/> */}
              <br/>
              <Kanban/>
              {/* <PaymentsList/> */}
            
          

      
         
    </div>
    </div>
    

    
  

  );
};
