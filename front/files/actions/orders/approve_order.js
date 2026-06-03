import order_obj from "../../models/order_model.js";
import approve_obj from "../../models/approve_order.js";
import check from "../roles.js";
import create from "../create_audit.js";
export default async function approve_order(req,res){
    if(check(["Investor"],req)){

    try{
        if(!req.session.user){
            return res.status(409).json({"message":"user not logged in"});
        }
        const {user_id}=req.session.user;
        const{item_id,order_id}=req.body;
        const fe=await order_obj.findOne({order_id:order_id,item_id:item_id,approval:false});
        
        if(!fe){
            return res.status(409).json({"message":"order is invalid or is approved"
            });
        }
        await approve_obj.create({
            user_id,
            item_id,
            order_id,
            approval:true,
            date:new Date().toUTCString()
        });
        await order_obj.findOneAndUpdate({order_id:order_id,item_id:item_id,time:fe.time},{approval:true});
        req.session.audit={
            user_id:req.session.user.user_id,
            full_name:req.session.user.full_name,
            description:` approved order ${order_id}`,
            now:new Date().toUTCString()
        }
        await create(req);
        res.status(201).json({"message":"approval order entered"});

        
    }
    catch(error){
        res.status(500).json({"message":"server error"});
        return console.log(error.message);
    };

    }
    else{
        console.log("denied access");
        return res.status(500).json({"message":"denied access"})
    }
}