import order_obj from "../../models/order_model.js";

async function fetch_orders(req,res){
    try{
        
        const resp = await order_obj.find({},
  { _id:0,__v:0},

);  
console.log(resp.length)
        res.status(200).json({resp});
        // console.log(resp)
    }
    catch(error){
        console.log(error.message);
    }
}
export default fetch_orders;