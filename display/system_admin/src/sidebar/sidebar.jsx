import { useEffect, useState } from "react";
import logo from "../images/logo/logo.png"
import logout from "../images/dashboard/logout_logo.png";
import form_register from "../images/dashboard/register_form_icon.png";
import dashboard from "../images/dashboard/dashboard.png";
import "./sidebar.css";
import Logout from "../notifications/logout";
import { useNavigate } from "react-router-dom";
function Sidebar(){
const nav=useNavigate();
const [track,settrack]=useState(true);
function manage(){
    const hold=!track;
    settrack(hold);
}
const [tr,settr]=useState(false);
const set=()=>{
    const h=!tr;
    settr(h);
}
function dir(){
nav("/register");
}
function dash(){
    nav("/dashboard")
}

return(
    <>
    <div className={track?"sidebar_show":"sidebar_hide"} 
    >
        <div className={tr?"show":"hide"}><Logout/></div>
        <div className="sidebar_header">
            <div className="sidebar_logo" onClick={manage}>
            <img src={logo}/>
        </div>
        <div className="sidebar_name">
          <p> RETRO INDUSTRIES</p>  
        </div>
        </div>
        
        <button className="sidebar_item_dash" onClick={dash}>
            <div className="sidebar_image">
                <img src={dashboard}/>
            </div>
            <div className="sidebar_label">
            <p>  Dashboard </p>    
            </div>
        </button>
        <button className="sidebar_item_reg" onClick={dir}>
            <div className="sidebar_image">
                <img src={form_register} />
            </div>
            <div className="sidebar_label">
             <p>  Register Form </p> 
            </div>
        </button>
        <button className="sidebar_item">
            <div className="sidebar_image">
                <img src={dashboard}/>
            </div>
            <div className="sidebar_label">
               <p> Dashboard </p> 
            </div>
        </button>
        <button className="sidebar_logout" onClick={set}>
            <div className="sidebar_image">
                <img src={logout}/>
            </div>
            <div className="sidebar_label">
               <p> Logout </p> 
            </div>
        </button>

    </div>
    </>
)
}

export default Sidebar;