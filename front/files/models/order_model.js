import mongoose from "mongoose";

const order_model=mongoose.Schema({
    order_id:{
        type:Number,
        unique:true,
        required:true,
        min:0
    },
    item_id:{
        type:Number,
        required:true,
        minlength:0
    },
    amount:{
        type:Number,
        required:true,
        min:1
    },
    approval:{
        type:Boolean,
        required:true,
        default:false
    },
    time:{
        type:String,
        requried:true
    }
    
})
const order_obj=mongoose.model("order_model",order_model);

export default order_obj;