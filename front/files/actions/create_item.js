import item_obj from "../models/items.js";
import check from "./roles.js";
export default async function create_item(req,res){
    if(check(["Vendor"],req)){
    try{
        if(!req.session.user){
            return res.status(409).json({"message":"user not logged in"});
        }
        const {item_id,item_name,amount}=req.body;
        await item_obj.create({
            item_id,
            item_name,
            amount
        });
        console.log("item created");
       return res.status(201).json({"message":"item created"});

    }
    catch(error){
        console.log(error.message)
    }
     }
    else{
        console.log("denied")
        return res.status(409).json({"message":"Access denied"});
    }
}