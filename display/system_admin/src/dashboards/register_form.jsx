import next from "../images/navigate/next_icon.png";
import file_complete from "../images/others/file-complete_40445.png";
import cancel from "../images/others/cancel_logo.png";
import Sidebar from "../sidebar/sidebar";
import back from "../images/navigate/back-icon.png"
import "./register.css";
import { useEffect, useState } from "react";
function Register_form(){
    const[state,setstate]=useState(0);
    const [f2,setf2]=useState(true);
    const[f3,setf3]=useState(false);
    const [btn,setbtn]=useState(false);
    const[btn_text,setbtn_text]=useState("Next");
    const[btn_img,setbtn_img]=useState(next);
    const [form,setform]=useState({
        user_id:"",full_name:"",password:"",email:"",role:""
    })
    const change=(e)=>{
        setform({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    function st(){
        if(form.email&&form.password&&form.full_name&&form.user_id&&form.role){
          return true;
        }
        else{
            return false;
        }
    }
    const submit=async(e)=>{
        e.preventDefault();
        if(btn){
            const resp=await fetch("http://localhost:3001/reg",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                credentials:"include",
                body:JSON.stringify({
                    "user_id":form.user_id,
                    "email":form.email,
                    "pass1":form.password,
                    "full_name":form.full_name,
                    "role":form.role
                })
            })
            if(resp.status===200||resp.status===201){
                alert("User is Registered");
                setform({
                    user_id:"",full_name:"",email:"",password:"",role:""
            })
            }
            else{
                alert("Failed to register");
            }
        }
        else{
            alert("enter all fields")
        }
    }
    const [rl,setrl]=useState([]);
    useEffect(()=>{
        const rec=async()=>{
            const take=await fetch("http://localhost:3001/fetch_roles",{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                },
                credentials:"include",
                // body:JSON.stringify({})
            })
            if(take.status==200||take.status==201){
                const hold=await take.json();
                console.log("Roles fetched"+hold.roles);
                const f=Object.values(hold.roles);
                console.log(f)
                setrl(f);
                return hold.roles;

            }
            else{
                return console.log("roles not found");
            }
        }
        rec();
    },[])
    function count(){
        if(state==0){
            setstate(state+1);
            setf2(false);
            setf3(true);
            setbtn_text("Back")
            setbtn_img(back);
            setbtn(false)
        }
        if(state==1){
            setstate(state-1);
            setf2(true);
            setf3(false);
            setbtn_text("Next")
            setbtn_img(next);
            // setbtn(false)
        }
        else if(st()){
            setbtn(true);
        //    setbtn_text("Complete");
        }
    };
    const col="Complete";
    
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
            <div className="btn_reg">
                <button className="ti" onClick={submit}>
                <p>Click To Register</p>
                </button>
            </div>
            <div className="reg_bd">
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
                    <div className={btn?"f1_complete":"f1_notify"}>
                        <div className="f1_text">
                            <p>{btn?"Complete Profile":"Incomplete Profile"}</p>
                        </div>
                        <div className="f1_image">
                            <img src={btn?file_complete:cancel}/>
                        </div>
                    </div>
                </form>
            
            
                <form className="form_2">
                    <div className="f2_title">
                        <p>Registration Form</p>
                    </div>
                    <div className="f2">
                    <div className={f2?"f2_body":"f2_hide"}>
                        <div className="f2_label">
                            <label>User ID</label>
                        </div>
                        <div className="f2_input">
                            <input type="number"name="user_id" value={form.user_id} onChange={change}/>
                        </div>
                    </div>
                    <div className={f2?"f2_body":"f2_hide"}>
                        <div className="f2_label">
                            <label>Email</label>
                        </div>
                        <div className="f2_input">
                            <input type="email" name="email" value={form.email} onChange={change}/>
                        </div>
                    </div>
                    </div>
                    <div className="f3">
                    <div className={f3?"f3_body":"f3_hide"}>
                        <div className="f3_label">
                            <label>Full Name</label>
                        </div>
                        <div className="f3_input">
                            <input type="text" value={form.full_name} name="full_name" onChange={change}/>
                        </div>
                    </div>
                    <div className={f3?"f3_body":"f3_hide"}>
                        <div className="f3_label">
                            <label>Password</label>
                        </div>
                        <div className="f3_input">
                            <input type="password" value={form.password} name="password" onChange={change}/>
                        </div>
                    </div>
                    <div className={f3?"f3_body":"f3_hide"}>
                       <select name="role" value={form.role} onChange={change} >
                        <option>Select a role</option>
                        {rl.map((rl,index)=>(
                            <option key={index} value={rl}>
                                {rl}
                            </option>

                        ))}
                       </select>
                    </div>
                    </div>
                    <button className="f2_button" type="button" onClick={count}>
                        <div className="btn_text"><p>{btn?col:btn_text}</p></div>
                        <div className="btn_image"><img src={btn_img}/></div>
                    </button>
                </form>
            </div>
        </div>
        

    </div>

</div>
</>
    )
}
export default Register_form;