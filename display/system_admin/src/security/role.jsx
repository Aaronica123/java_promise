import { useEffect, useState } from "react";
import set_session from "./set.js";

function Payload({children}){
    const[role,setrl]=useState(false);
    const[checkTrigger, setCheckTrigger] = useState(0); // Add this

    // Add this function to manually trigger re-check
    const refreshAuthStatus = () => {
        setCheckTrigger(prev => prev + 1);
    };

    useEffect(()=>{
        // Make refresh function available globally for Logout to call
        window.refreshAuthStatus = refreshAuthStatus;
        
        async function check(){
            try {
                const resp=await fetch("http://localhost:3001/status",{
                    "method":"GET",
                    "headers":{
                        "Content-Type":"application/json"
                    },
                    "credentials": "include"
                })
                const hold=await resp.json();
                
                if((resp.status===200||resp.status===201)){
                    console.log("Setting role to:", hold.state);
                    setrl(hold.state);
                    // Update session storage with latest data when user is logged in
                    if(hold.state) {
                        set_session.check(hold);
                    }
                }
                else{
                    setrl(false);
                }
            } catch(error) {
                console.error("Status check error:", error);
                setrl(false);
            }  
        }

        check();
        
        // Cleanup
        return () => {
            delete window.refreshAuthStatus;
        };
    },[checkTrigger]) // Add checkTrigger as dependency

    return (
        <>
            {role?<div>{children}</div>: <div><p>This user isnt logged in</p></div>}
        </>
    )
}

export default Payload;