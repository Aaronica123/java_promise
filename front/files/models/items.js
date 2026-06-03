import mongoose from "mongoose";

const item_model=mongoose.Schema({
    item_id:{
        type:Number,
        unique:true,
        required:true,
        minlength:100
    },
    item_name:{
        type:String,
        required:true,
        unique:true,
        maxlength:255
    },
    amount:{
        type:Number,
        required:true,
        minlength:1,
        default:0
    }
})
const item_obj=mongoose.model("item_model",item_model);
export default item_obj;