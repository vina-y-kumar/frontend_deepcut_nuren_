import "./payment.css";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { AddPayment } from "../../components/AddPayment";
import { PaymentsList } from "../../components/PaymentList";
import Kanban from "../../components/Kanban/Kanban";
// import KanbanBoard from "../../components/Kanban/Kanban";

export const Payment = () => {
  return (
    <div className="pay">
      <div className="container">
        <div className="pay_inner">
          <div className="pay_left_box">
            <Sidebar />
          </div>
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
      </div>
    </div>
  );
};
