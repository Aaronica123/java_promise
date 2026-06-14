import "./new_sidebar.css";
import logo from "../images/logo/logo.png"
import logout from "../images/dashboard/logout_logo.png";
import form_register from "../images/dashboard/register_form_icon.png";
import dashboard from "../images/dashboard/dashboard.png";
import { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
function New_sidebar(){
    const [btn1,setbtn1]=useState(true);
    const [btn2,setbt2]=useState(false);
     const nav=useNavigate();
    function b1(){
        setbtn1(true);
        setbt2(false);
        nav("/dash_2");
    }
    function b2(){
        setbt2(true);
        setbtn1(false);
        nav("/create_order");
    }
    // useEffect(()=>{
    //     setbtn1(true);
    // },[])
   
    
return (
    <>
    <div className="new_side_design">
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
                            <p>Order Items</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="side_logout">
                <div className="side_log_btn">
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
export default New_sidebar;