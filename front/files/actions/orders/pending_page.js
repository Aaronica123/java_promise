import order_obj from "../../models/order_model.js";

async function pending_page(req,res){
    try{
        const {index}=req.body;
        var p=1;
        if(index){
            p=index;
        }
        const totaldata=await order_obj.countDocuments();
        const amnt=10;
        const offset=(p-1)*amnt;
        const data=await order_obj.find({approval:false},{_id:0,__v:0}).skip(offset).limit(amnt);
        const pages=Math.ceil(totaldata/amnt);
        const next_page=index<pages;
        const prev_page=index>1;
        res.status(201).json({"message":"fetched",
            data,
            next_page,
            prev_page,
            totalpages:pages
        })
        console.log(data);
    }
    catch(error){
        console.log(error.message);
    }
}

export default pending_page;

  