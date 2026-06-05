import google from "../images/socials/google_icon-icons.com_62736.png"
import instagram from "../images/socials/Instagram_icon-icons.com_66804.png"
import linkedin from "../images/socials/linkedin_icon-icons.com_53609.png"
import logo from "../images/logo/logo.png"
import "./login.css";
import { useState } from "react";
function Login(){
    const[form,setform]=useState({
        password:"",
        user_id:""
    })
    const change=(e)=>{
        setform({
            ...form,
            [e.target.name]:e.target.value
        })
        // setform({
        //     password:"",
        //     user_id:""
        // })
    }
    const connect=async(e)=>{
        e.preventDefault();
        try
        {

        
        const resp=await fetch('http://localhost:3001/new/login',{
            'method':"POST",
            'headers':{
                'Content-Type':'application/json'
            },
            'body':JSON.stringify({
                "user_id":form.user_id,
                "pass1":form.password
            })
        })
        if(resp){
            alert("log in successful");
        }
        else{
            alert("login failed");
        }
        }
        catch(error){
            console.log(error.message);
        }
    }


    return (
        <>
        <div className="login_body">
            <div className="login_left">
                <div className="login_logo">
                    <img src={logo}/>
                </div>
                <div className="login_title">
                    
                        <h3>
                            RETRO INDUSTRIES
                        </h3>
                    
                </div>
            </div>
            <div className="login_right">
                <div className="login_form">
                    <div className="login_1">
                        <p>Welcome Back</p>
                    </div>
                    <div className="login_2">
                    <div className="login_section">
                        <div className="login_label">
                            <p>User ID</p>
                        </div>
                        <div className="login_input">
                            <input type="number" required name="user_id" value={form.user_id} onChange={change}/>
                        </div>
                    </div>
                    <div className="login_section">
                        <div className="login_label">
                            <p>Password</p>
                        </div>
                        <div className="login_input">
                            <input type="password" required name="password" value={form.password} onChange={change} />
                        </div>
                    </div>
                    </div>
                    <div className="login_3">
                        
                           <p onClick={connect}>Login</p>
                        
                    </div>
                    <div className="login_social">
                        <div className="social_1">
                            <img src={google}/>
                        </div>
                        <div className="social_2">
                            <img src={instagram}/>
                        </div>
                        <div className="social_3">
                            <img src={linkedin}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}
export default Login;