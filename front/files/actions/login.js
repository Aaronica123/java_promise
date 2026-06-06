import user_obj from "../models.js";
import bcrypt from "bcrypt";
import assign_sess  from "../sessions/session.js";
import create from "./create_audit.js";

export async function new_login(req,res){
    try{
        console.log("receieved");
        const{user_id,pass1}=req.body;
        const fetch =await user_obj.findOne({user_id:user_id});
        if(fetch){
            const now=new Date().toUTCString();
            const dec=await bcrypt.compare(pass1,fetch.password);
            if(dec){
                await assign_sess(req,res,fetch);
                req.session.audit={
                    user_id:fetch.user_id,
                    description:"Log in was successful",
                    now,
                    full_name:fetch.full_name
                }
                await create(req);
                console.log("complete");

            }
            else{
                res.json({"message":"the password is incorrect"});
                req.session.audit={
                    user_id:fetch.user_id,
                    description:"Entered incorrect password",
                    now,
                    full_name:fetch.full_name
                }
                await create(req);
                 console.log("complete");


            }

        }
        else{
            console.log("not found")
            return res.status(404).json({"message":"the user doesnt exist"})
        }
    }
    catch(error){
        console.log(error.message);
    }
}