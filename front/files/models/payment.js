import mongoose from "mongoose";

const paymeny_model=mongoose.Schema({
    sessionID:{
        type:String,
        required:true,
        maxlength:255,
        unique:true
    },
    user_id:{
        type:String,
        required:true,
        maxlength:10
    },
    amount:{
        type:Number,
        required:true,
        maxlength:100000,
        default:0,
        minlength:1000
    },
    tracker:{
        type:Boolean,
        required:true,
        default:false
    },
    name:{
        type:String,
        required:true,
        maxlength:255
    }
})
const payment_obj=mongoose.model("payment_model",paymeny_model)
export default payment_obj;