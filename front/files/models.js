import mongoose from "mongoose";

export const roles={
    IT_handler:"IT_handler",
    Investor:"Investor",
    Security:"Security",
    Registry:"Registry",
    Vendor:"Vendor"
}
const User=mongoose.Schema({
    user_id:{
        type:Number,
        unique:true,
        required:true,
        maxlength:10
    },
    full_name:{
        type:String,
        required:true,
        maxlength:255
    },
    email:{
        type:String,
        required:true,
        unique:true,
        maxlength:255
    },
    password:{
        type:String,
        maxlength:255,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:Object.values(roles)
    }
});
const user_obj=mongoose.model("user_model",User);
export default user_obj;
