import "./contactsTable.css";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";


export const ContactsTable = () => {

  return (
    <div className="all_teachers">
      <div className="container">
        <div className="all_teachers_inner">
          <div className="all_teachers_left_box">
            <Sidebar />
          </div>
          <div className="all_teachers_right_box">
            <Header name="Contacts"/>
            <div className="all_teachers_right_box_inner">
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
