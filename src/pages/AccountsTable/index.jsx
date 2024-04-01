import "./accountsTable.css";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { AccountTableContent } from "../../components/AccountsTableContent";

export const AccountsTable = () => {

  return (
    <div className="all_students">
      <div className="container">
        <div className="all_students_inner">
          <div className="all_students_left_box">
            <Sidebar />
          </div>
          <div className="all_students_right_box">
            <Header name="Accounts"/>
            <div className="all_students_right_box_inner">
              <AccountTableContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
