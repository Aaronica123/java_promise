import next from "../images/navigate/next_icon.png";
import file_complete from "../images/others/file-complete_40445.png";
import cancel from "../images/others/cancel_logo.png";
import Sidebar from "../sidebar/sidebar";
import back from "../images/navigate/back-icon.png"
import "./register.css";
import { useState } from "react";
function Register_form(){
    const[state,setstate]=useState(0);
    const [f2,setf2]=useState(true);
    const[f3,setf3]=useState(false);
    const [btn,setbtn]=useState(true);
    const[btn_text,setbtn_text]=useState("Next");
    const[btn_img,setbtn_img]=useState(next);
    function count(){
        if(state==0){
            setstate(state+1);
            setf2(false);
            setf3(true);
            setbtn_text("Back")
            setbtn_img(back);
        }
        else if(state==1){
            setstate(state-1);
            setf2(true);
            setf3(false);
            setbtn_text("Next")
            setbtn_img(next);
        }
    };
    return(
<>
<div className="register_design">
    <div className="side_dash">
        <Sidebar/>
    </div>
    <div className="register_header">
        
        <div className="register-title">
            <div className="re1">
                <h2>Registry</h2>
            </div>
            
        </div>
        <div className="register_body">
            
                <form className="form_1">
                    <div className="f1_title">
                        <p>Process Tracker</p>
                    </div>
                    <div className="f1_group">
                    <div className="f1_steps">
                        <p>Step 1</p>
                    </div>
                    <div className="f1_steps">
                        <p>Step 2</p>
                    </div>
                    </div>
                    <div className="f1_notify">
                        <div className="f1_text">
                            <p>Incomplete Profile</p>
                        </div>
                        <div className="f1_image">
                            <img src={cancel}/>
                        </div>
                    </div>
                </form>
            
            
                <form className="form_2">
                    <div className="f2_title">
                        <p>Registration Form</p>
                    </div>
                    <div className={f2?"f2_body":"f2_hide"}>
                        <div className="f2_label">
                            <label>User ID</label>
                        </div>
                        <div className="f2_input">
                            <input type="number"/>
                        </div>
                    </div>
                    <div className={f2?"f2_body":"f2_hide"}>
                        <div className="f2_label">
                            <label>User ID</label>
                        </div>
                        <div className="f2_input">
                            <input type="number"/>
                        </div>
                    </div>
                    
                    <div className={f3?"f3_body":"f3_hide"}>
                        <div className="f3_label">
                            <label>Full Name</label>
                        </div>
                        <div className="f3_input">
                            <input type="text"/>
                        </div>
                    </div>
                    <div className={f3?"f3_body":"f3_hide"}>
                        <div className="f3_label">
                            <label>Password</label>
                        </div>
                        <div className="f3_input">
                            <input type="password"/>
                        </div>
                    </div>
                    <button className="f2_button" type="button" onClick={count}>
                        <div className="btn_text"><p>{btn_text}</p></div>
                        <div className="btn_image"><img src={btn_img}/></div>
                    </button>
                </form>
            
        </div>
        

    </div>

</div>
</>
    )
}
export default Register_form;