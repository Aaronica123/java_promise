import google from "../images/socials/google_icon-icons.com_62736.png"
import instagram from "../images/socials/Instagram_icon-icons.com_66804.png"
import linkedin from "../images/socials/linkedin_icon-icons.com_53609.png"
import logo from "../images/logo/logo.png";
import Error from "../notifications/error";
import "./login.css";
import { useState ,useEffect} from "react";
import Success_alert from "../notifications/success";
import { useNavigate } from "react-router-dom";
function Login(){
    const [note,setnote]=useState(false);
    const [error,seterror]=useState(false);
    const nav1=useNavigate();
    
    const[form,setform]=useState({
        password:"",
        user_id:""
    })
    const change=(e)=>{
        setform({
            ...form,
            [e.target.name]:e.target.value
        })
        
    }
   
    const connect=async(e)=>{
        e.preventDefault();
        try
        {

        alert(form.user_id + form.password)
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
        alert(resp.status);
        const j=resp.json();
        alert(j.message);
        if(resp.status==200||resp.status==201){
            alert("log in successful");
            setform({
            password:"",
            user_id:""
        })
        
        setnote(true);
        

        }
        else{
            alert("login failed");
            seterror(true);
        }
        }
        catch(error){
            console.log(error.message);
        }
    }
    

 useEffect(() => {
        if (note) {
            const timer = setTimeout(() => {setnote(false),nav1("/dashboard")}, 5000);
            //set timeout takes the function and the timeout so after that timeout it 
            return () => clearTimeout(timer);
        }
    }, [note,nav1]);

useEffect(()=>{
    if(error){
        const tr=setTimeout(()=>seterror(false),5000);
        return ()=>clearTimeout(tr);
    }
},[error]);
    return (
        <>
       
        
        <div className="login_body">
            <div className={note?"note_show":"note_hide"}>
                <Success_alert ch={false}/>
        </div>
        <div className={error?"note_show":"note_hide"}>
            <Error ch={false}/>
        </div>
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
                <form className="login_form" onSubmit={connect}>
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
                        
                           <button type="submit">Login</button>
                        
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
                </form>
            </div>

        </div>
        </>
    )
}
export default Login;