import user_obj from "../models.js";
import bcrypt from "bcrypt";
import assign_sess  from "../sessions/session.js";
export async function new_login(req,res){
    try{
        const{user_id,pass1}=req.body;
        const fetch =await user_obj.findOne({user_id:user_id});
        if(fetch){
            
            const dec=await bcrypt.compare(pass1,fetch.password);
            if(dec){
                assign_sess(req,res,fetch);
            }
            else{
                res.json({"message":"the password is incorrect"});
            }

        }
        else{
            return res.json({"message":"the user doesnt exist"})
        }
    }
    catch(error){
        console.log(error.message);
    }
}