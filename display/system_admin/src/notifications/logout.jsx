import "./logout.css";
import back from "../images/navigate/back_arrow.png";
import alert from "../images/navigate/alert_logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import set_session from "../security/set.js";

function Logout(){
    const nav1=useNavigate();
    const [mess,setmess]=useState("Log Out");
    const [state,setstate]=useState(false);
    
    const log=async()=>{
        setmess("Logging out");
        const resp=await fetch("http://localhost:3001/delete_session",{
            "method":"DELETE",
            "headers":{
                "Content-Type":"application/json"
            },
            "credentials": "include", // Fixed typo: was "cridentials"
            "body":JSON.stringify({})
        })
        if(resp.status==200||resp.status==201){
            set_session.deleterole();
            sessionStorage.clear();
            console.log("reached");
            setstate(true);
            
            // Trigger the Payload component to re-check auth status
            if(window.refreshAuthStatus) {
                window.refreshAuthStatus();
            }
        }
    }
    
    useEffect(()=>{
        if(state){
            console.log("log out");
            const ti=setTimeout(()=>{
                setmess("Logged out");
                nav1("/login");
                setstate(false);
            },2000);
            return ()=>clearTimeout(ti);
        }
        else {
            console.log("Alert");
        }
    },[state,nav1])
    
    return (
        <>
        <div className="log_body">
            <div className="log_image">
                <img src={alert} alt="alert"/>
            </div>
            <div className="log_message">
                Are you sure you want to Logout
            </div>
            <div className="log_text">
                <div className="log1">
                <div className="log_p1">
                    <img src={back} alt="back"/>
                </div>
                <div className="log_p2">
                    <p>Go Back</p>
                </div>
                </div>
                <div className="log2">
                <button className="log_p2p" onClick={log}>
                    <div>{mess}</div>
                </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Logout;