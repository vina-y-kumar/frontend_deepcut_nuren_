import "./sidebar.css";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import Home from "../../assets/hisobot.png";
import Pupils from "../../assets/pupils.png";
import Davomat from "../../assets/davomat.png";
import Group from "../../assets/group.png";
import Messanger from "../../assets/messanger.png";
import Payment from "../../assets/payment.png";
import Togo from "../../assets/logo.svg";

export const Sidebar = () => {
  
  return (
    <>
      <input type="checkbox" name="check" id="check" />
      <label for="check">
        <i className="bx bx-menu" id="btn"></i>
        <i className="bx bx-x" id="cancel"></i>
      </label>
      <div className="siadebar">
        <div className="sidebar_inner">
          <a href="/home" className="sidebar_logo">
            <img
              src={Logo}
              alt="logo"
              className="sidebar_img"
              width={48}
              height={48}
            />
            <p className="sidebar_logo_text">Nuren AI </p>
          </a>
          <hr className="hr" />
          <ul className="sidebar_list">
            <li className="sidebar_item">
              <NavLink className="sidebar_link" to="/home">
                {({ isActive, isPending }) => (
                  <span
                    style={{ display: "flex" }}
                    className={isActive ? "actives" : ""}
                  >
                    <img
                      src={Home}
                      alt="icon"
                      className="sidebar_link_img"
                      width={20}
                      height={20}
                    />
                    <p className="sidebar_link_text">Dashboard</p>
                  </span>
                )}
              </NavLink>
            </li>
            <li className="sidebar_item">
              <NavLink className="sidebar_link" to="/students">
                {({ isActive, isPending }) => (
                  <span
                    style={{ display: "flex" }}
                    className={isActive ? "actives" : ""}
                  >
                    <img
                      src={Pupils}
                      alt="icon"
                      className="sidebar_link_img"
                      width={22}
                      height={22}
                    />
                    <p className="sidebar_link_text">Contacts</p>
                  </span>
                )}
              </NavLink>
            </li>
            <li className="sidebar_item">
              <NavLink className="sidebar_link" to="/group">
                {({ isActive, isPending }) => (
                  <span
                    style={{ display: "flex" }}
                    className={isActive ? "actives" : ""}
                  >
                    <img
                      src={Group}
                      alt="icon"
                      className="sidebar_link_img"
                      width={20}
                      height={20}
                    />
                    <p className="sidebar_link_text">Accounts</p>
                  </span>
                )}
              </NavLink>
            </li>
            <li className="sidebar_item">
              <NavLink className="sidebar_link" to="/payment">
                {({ isActive, isPending }) => (
                  <span
                    style={{ display: "flex" }}
                    className={isActive ? "actives" : ""}
                  >
                    <img
                      src={Payment}
                      alt="icon"
                      className="sidebar_link_img"
                      width={20}
                      height={20}
                    />
                    <p className="sidebar_link_text">Leads</p>
                  </span>
                )}
              </NavLink>
            </li>
            <li className="sidebar_item">
              <NavLink className="sidebar_link" to="/davomat">
                {({ isActive, isPending }) => (
                  <span
                    style={{ display: "flex" }}
                    className={isActive ? "actives" : ""}
                  >
                    <img
                      src={Davomat}
                      alt="icon"
                      className="sidebar_link_img"
                      width={20}
                      height={20}
                    />
                    <p className="sidebar_link_text">Opportunities</p>
                  </span>
                )}
              </NavLink>
            </li>
            <li className="sidebar_item">
              <NavLink className="sidebar_link" to="/apeal">
                {({ isActive, isPending }) => (
                  <span
                    style={{ display: "flex" }}
                    className={isActive ? "actives" : ""}
                  >
                    <img
                      src={Messanger}
                      alt="icon"
                      className="sidebar_link_img"
                      width={25}
                      height={25}
                    />
                    <p className="sidebar_link_text">Appeals</p>
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
          
        </div>
          <p style={{marginLeft:'50px'}}className="sidebar_info_text">
            Nuren AI 
          </p>
          <div style={{marginLeft:'50px',marginTop:'50px'}}>
          <img height="100px" width="100px" src={Togo} alt="Logo" /></div>
      </div>
    </>
  );
};
