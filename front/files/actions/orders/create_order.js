import order_obj from "../../models/order_model.js";
import item_obj from "../../models/items.js";
import check from "../roles.js";
import create from "../create_audit.js";
export default async function create_order(req,res){
    if(check(["Vendor"],req)){
    try{
        if(!req.session.user){
        return res.status(409).json({"message":"user not logged in"});
    }
    const {order_id,item_id,amount}=req.body;
    const find=await item_obj.findOne({item_id});
    if(!find){
        return res.status(404).json({"message":"Item not found"});
    }
    const fi=await order_obj.findOne({order_id});
    if(fi){
        return res.status(409).json({"message":"this order exists"});
    }
    await order_obj.create({
        order_id,
        item_id,
        amount,
        approval:false,
        time:new Date().toUTCString()
    })
    res.status(201).json({"message":"order entered successfully"});
    req.session.audit={
        user_id:req.session.user.user_id,
        full_name:req.session.user.full_name,
        description:`order id ${order_id} created`,
        now:new Date().toUTCString()
    }
    await create(req);
    return console.log("order entered");
    }
    catch(error){
        return console.log(error.message);
    }
    }
    else{
        res.status(409).json({"message":"access denied"});
        return console.log("denied access");
    }
    

}