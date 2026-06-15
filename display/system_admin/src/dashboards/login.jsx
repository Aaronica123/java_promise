import google from "../images/socials/google_icon-icons.com_62736.png"
import instagram from "../images/socials/Instagram_icon-icons.com_66804.png"
import linkedin from "../images/socials/linkedin_icon-icons.com_53609.png"
import logo from "../images/logo/logo.png";
import Error from "../notifications/error";
import "./login.css";
import { useState ,useEffect} from "react";
import Success_alert from "../notifications/success";
import { useNavigate } from "react-router-dom";
import set_session from "../security/set";
// import Load from "../notifications/loading";

function Login(){
    const [note,setnote]=useState(false);
    const [error,seterror]=useState(false);
    const [set,setload]=useState(true);
    const nav1=useNavigate();
    const [ms,setms]=useState("Log in");
    
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
    
   const [f,setf]=useState();
    const connect=async(e)=>{
        e.preventDefault();
        try
        {
        setload(false);
        setms("logging in");
        const resp=await fetch('http://localhost:3001/new/login',{
            'method':"POST",
            'headers':{
                'Content-Type':'application/json'
            },
            "credentials": "include",
            'body':JSON.stringify({
                "user_id":form.user_id,
                "pass1":form.password
            })
        })

        if(resp.status==200||resp.status==201){
            setform({
            password:"",
            user_id:""
        })
        const bd=await resp.json();
        
        if(bd.state){
            set_session.setrole(bd.state,bd);
            console.log("values of bd are " + bd);
            const f1=set_session.getrole();
            console.log("user is an " +Object.values(bd));
            if(bd.role=="Investor"){
                setf(f1.role)
            }else if(f1.role=="Vendor"){
                setf(f1.role);
            }
            console.log("done");
        }
        setnote(true);
        

        }
        else{
            console.log("login failed");
            seterror(true);
            set_session.setrole(false,{});
        }
        }
        catch(error){
            console.log(error.message);
        }
    }
    // function dir(){
    //     if(f=="Investor"){
    //         nav1("/dash_2")
    //     }else if(f=="Vendor"){
    //         nav1("/dash_3")
    //     }
    // }
    
useEffect(()=>{
            if(!set){
                const ti=setTimeout(()=>{setms("Log in"),setload(true)},5000);
                return ()=>clearTimeout(ti);
            }
        },[set])
 useEffect(() => {
        if (note) {
            const timer = setTimeout(() => {setnote(false),f=="Investor"?nav1("/dash_3"):nav1("/dash_2")}, 2000);
            //set timeout takes the function and the timeout so after that timeout it 
            return () => clearTimeout(timer);
        }
    },[note,nav1]);

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
                        
                           <button type={set?"submit":"button"} className={set?"active":"deactive"}>
                            {ms}</button>
                        
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