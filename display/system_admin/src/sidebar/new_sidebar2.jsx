import "./new_sidebar.css";
import logo from "../images/logo/logo.png"
import logout from "../images/dashboard/logout_logo.png";
import form_register from "../images/dashboard/register_form_icon.png";
import dashboard from "../images/dashboard/dashboard.png";
import { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Logout from "../notifications/logout";
function New_sidebar12(){
    const [btn1,setbtn1]=useState(null);
    const [btn2,setbtn2]=useState(null);
     const nav=useNavigate();
     const [log,setlog]=useState(false);
     function tr(){
        setlog(!log);
     }
    function b1(){
        setbtn1(true);
        setbtn2(false);
        nav("/dash_3");
    }
    function b2(){
        setbtn2(true);
        setbtn1(false);
        nav("/view_order");
    }
    const location = useLocation();
     useEffect(() => {
        if (location.pathname === "/dash_3") {
            setbtn1(true);
            setbtn2(false);
        } else if (location.pathname === "/view_order") {
            setbtn1(false);
            setbtn2(true);
        }
    }, [location.pathname]);
    
return (
    <>

    <div className="new_side_design">
       <div className={log?"act":""}>{log?<Logout/>:""}</div>
        <div className="new_side_body">
            <div className="new_side_logo">
                <div className="logo_img">
                    <img src={logo}/>
                </div>
            </div>
            <div className="new_side_title">
                <div className="side_title">
                    <h3>RETRO INDUSTRIES</h3>
                </div>
            </div>
            <div className="new_side_items">
                <div className="new_side_btn">
                    <div className={btn1?"side_btn_active":"side_btn_inactive"} onClick={b1}>
                        <div className="side_btn_img">
                            <img src={dashboard}/>
                        </div>
                        <div className="side_btn_text">
                            <p>Dashboard</p>
                        </div>
                    </div>
                     <div className={btn2?"side_btn_active":"side_btn_inactive"} onClick={b2}>
                        <div className="side_btn_img">
                            <img src={form_register}/>
                        </div>
                        <div className="side_btn_text">
                            <p>View Items</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="side_logout">
                <div className="side_log_btn" onClick={tr}>
                    <div className="logout_img">
                        <img src={logout}/>
                    </div>
                    <div className="logout_text">
                        <p>Logout</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </>
)
}
export default New_sidebar12;