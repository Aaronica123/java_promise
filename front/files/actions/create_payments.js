import payment_obj from "../models/payment.js";
import audit_obj from "../models/audits_model.js";

async function create_payment(req,res){
    try{
        if(!req.session.user){
            return res.status(409).json({"message":"user not logged in"});
        }
        const{amount}=req.body;
        const{user_id,full_name}=req.session.user;
        const sesssionID=req.sessionID;


    }
    catch(error){
        console.log(error.message+error.code);
    }
}