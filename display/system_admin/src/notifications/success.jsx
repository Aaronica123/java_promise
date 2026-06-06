import React from "react";
import "./success.css";
import success from "../images/navigate/success_image.png"
import back from "../images/navigate/back-icon.png"
function Success_alert(req){
    const check=req.ch;
    

    return(
        <>
        <div className="body">
            <div className="image">
                <img src={success}/>
            </div>
            <div className="message">
               <p>Welcome</p>
            </div>
            <div className={check?"text":"timer"}>
                <div className="p1">
                    <img src={back}/>
                </div>
                <div className="p2">
                    <p>Go Back !</p>
                </div>
                
            </div>
            
        </div>
        </>
    )
}
export default Success_alert;