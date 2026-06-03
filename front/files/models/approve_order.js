import mongoose from "mongoose";

const approve_model=mongoose.Schema({
    user_id:{
        type:Number,
        required:true,
        maxlength:10
    },
    item_id:{
        type:Number,
        required:true

    },
    order_id:{
        type:Number,
        required:true,
        min:0
    },
    approval:{
        type:Boolean,
        required:true,
        default:false
    },
    date:{
        type:String,
        required:true,        
    }
})
const approve_obj=mongoose.model("payment_model",approve_model)
export default approve_obj;