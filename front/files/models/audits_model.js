import mongoose from "mongoose";
const audit=mongoose.Schema({
    user_id:{
        type:Number,
        required:true,
        maxlength:20
    },
    full_name:{
        type:String,
        required:true,
        maxlength:255
    },
    action:{
        type:String,
        requried:true,
        maxlength:10
    },
    time:{
        type:String,
        required:true,
        maxlength:255
    },
    description:{
        type:String,
        required:true,
        maxlength:50
    }
});
const audit_obj=mongoose.model("audit_table",audit);
export default audit_obj;
