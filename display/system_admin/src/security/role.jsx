import { useEffect, useState } from "react";


function Payload({children}){
    const[role,setrl]=useState(false);

    useEffect(()=>{
        // if(set_session.getrole()){   
            console.log("delete")    
    async function check(){
        
            const resp=await fetch("http://localhost:3001/status",{
                "method":"GET",
                "headers":{
                    "Content-Type":"application/json"
                },
                "credentials": "include"
            })
             const  hold=await resp.json();
             console.log("del1")
            if((resp.status===200||resp.status===201)){
                console.log("del2")
                setrl(hold.state);
                // set_session.setrole(hold.state,hold);
                
            }
            else{
                setrl(false);
            }  
    }

    check();
     
})
return (
    <>
    {role?<div>{children}</div>: <div><p>This user isnt logged in</p></div>}
    </>
)

}
export default Payload;