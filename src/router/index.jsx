import { Route, Routes } from "react-router-dom";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";

import { LeadPage } from "../pages/Lead";

import { NotFound } from "../pages/NotFound";


import { AccountsTable } from "../pages/AccountsTable";
import { ContactsTable } from "../pages/ContactsTable";
import { Opportunities } from "../pages/opportunities";
import Dashboard from "../pages/dashboard";
import KanbanBoard from "../components/Kanban/Kanban11";
import Lead from "../pages/Lead/AddLead/Lead";
// import Kanban1 from "../components/Kanban/Kanban1";

import Met from "../pages/Meetings/met";
import CallPage from "../pages/CallPage/callpage";
import MassEmail from "../pages/MassEmail/Email";
import AccountsPage from "../pages/AccountsPage/Header";


export const RouteWrapper = () => {

  const gettingToken = localStorage.getItem("token")

  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
       <Route path="/home" element={<Home />} /> 
     
       <Route path="/accounts" element={<AccountsTable/>}/> 
     
       <Route path="/contacts" element={<ContactsTable/>}/> 
     
       <Route path="/lead" element={<LeadPage />} />
       <Route path="/opportunities" element={<Opportunities />} /> 
       
       
       <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/kanban" element={<KanbanBoard />} />
      <Route path="/addlead" element={<Lead/>} />

      <Route path="/meetings" element={<Met/>}  />
      <Route path="/callpage" element={<CallPage/>}/>
      <Route path="*" element={<NotFound />} />
      <Route path="/accounts/:id" element={<AccountsPage />} />
      
      <Route path="/email" element={<MassEmail/>} />

    </Routes>
  );
};
