import check from "./roles.js";
import audit_obj from "../models/audits_model.js";
import create from "./create_audit.js";
export async function view_audits(req,res){
    try{
        if(check(["Security"],req)){

           const resp = await audit_obj.where("time").lt(new Date().toUTCString);//a where clause added to fetch by time where the logs are less than current date
        //    const {full_name,user_id,description,action,time}=resp;
           console.log(resp)
           res.status(200).json({"message":"fetched audits",
            resp
           });
           console.log("fetched");
           req.session.audit={
            user_id:req.session.user.user_id,
            full_name:req.session.user.full_name,
            description:"Fetched all logs",
            action:req.method,
            now:new Date().toUTCString()

           }
           await create(req);
           console.log("complete")

           
        }else{
            console.log("denied permission");
        }
    }
    catch(error){
        console.log(error.message);
    }
}