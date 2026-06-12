import order_obj from "../../models/order_model.js";
async function approved_page(req,res){

    try{
const {index}=req.body;
const total=await order_obj.countDocuments();
const amnt=10;
var p=1;
if(Number(index)){
    p=index;
}
const offset=(p-1)*amnt;
const data=await order_obj.find({approval:true},{_id:0,__v:0}).skip(offset).limit(amnt);
const totaldata=Math.ceil(total/amnt);
const next_page=index<totaldata;
const prev_page=index>1;
res.status(201).json({"message":"Fetched",
    data,
    next_page,
    prev_page,
    pages:totaldata
})
console.log(data);
    }
    catch(error){
        console.log(error.message);
    }
};
export default approved_page;