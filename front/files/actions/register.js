import user_obj from "../models.js";
import bcrypt from "bcrypt";
import { roles } from "../models.js";
export async function Register(req,res){
    
    const {user_id,pass1,full_name,email,role}=req.body;
    try{
    if(!user_id||!pass1||!full_name||!email||!role){
        return res.status(400).json({"message":"Enter all fields"})
    };
    const password=await bcrypt.hash(pass1,10);
    if(role in roles)
{
    const user=await user_obj.create({
        user_id,
        password,
        full_name,
        email,
        role
    });
    if(user){
        return res.status(201).json({"message":`user id ${user_id} created succesfully`});
    }
    else{
        return res.status(409).json({"message":"error occured"});
    }
} 
else{
    return res.status(409).json({"message":"role is invalid"});
}
   
}
    catch(error){
        console.log(error.message);
    }
}