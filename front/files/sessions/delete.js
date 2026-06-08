import mongoose from "mongoose";
async function delete_session(req,res){
    try{
       const fetch=await mongoose.connection.collection("login_sessions").deleteOne({_id:req.sessionID});
       if(fetch){
        console.log("session ID found");
       }
       else{
        console.log("This session doesnt exist");
       }
       new Promise((resolve,reject)=>{
        req.session.destroy((err)=>{
            if(err){
                reject(err);
                console.log("Failed to delete");
                return res.status(409).json({"message":"Current session is invalid"})
            }
            else{
                resolve();
                console.log("deleted successfully");
                return res.status(201).json({
                    "message":"Session ID deleted",
                    "state":true
                });
            }
        })
       })
    }
    catch(error){
        console.log(error.mesage);
    
    }
}
export default delete_session;