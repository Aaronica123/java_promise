import check from "../actions/roles.js";

export function status(req,res){
    if(check(["IT_handler"],req)){
        console.log("reading")
    try{
        if(req.session&& req.session.user){
            res.status(200).json({"message":"user is logged in"});
            return console.log("success")
        }
        else{
            res.status(403).json({"message":"user is logged out"})
            return console.log("failed");
        }
    }
    catch(error){
        console.log(error.message)
    }
    }
    else{
        res.status(409).json({"message":"denied permision"})
       return console.log("Denied")
    }
    
}
