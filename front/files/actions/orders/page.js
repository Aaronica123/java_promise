import order_obj from "../../models/order_model.js";

async function page(req,res){
    try{
        const{index}=req.body;
        let p=1;
        if(index){
            p=index;
        }
        const amnt=10;
        
        const offset=(p-1)*amnt;
        //skip the first set in the offset then display the amnt data rows set by the index;
        const data=await order_obj.find({},{_id:0, __v:0}).skip(offset).limit(amnt); 
        const total=await order_obj.countDocuments();
        console.log(total);
        const pages=Math.ceil(total/amnt);
        console.log(pages);
        const prev_pg=index>1;
        const next_pg=index<pages;

        console.log(data);
        res.status(200).json({"message":"found",
            data,
            next_pg,
            prev_pg,
            pages
        });
    }

    catch(error){
        console.log(error.message);
        res.status(500).json({"message":"not fetched"});
    }
}
export default page;