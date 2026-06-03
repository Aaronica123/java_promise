import mongoose from "mongoose";

const item_model=mongoose.Schema({
    item_id:{
        type:Number,
        unique:true,
        required:true,
        min:100
    },
    item_name:{
        type:String,
        required:true,
        unique:true,
        maxlength:255
    }
})
const item_obj=mongoose.model("item_model",item_model);
export default item_obj;