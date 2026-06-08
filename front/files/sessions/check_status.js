

export function status(req,res){
    // if(check(["IT_handler"],req)){
        console.log("reading")
        console.log(req.session)
        console.log(req.sessionID)
    try{
        if(req.session&& req.session.user){
            res.status(200).json({"message":"user is logged in",
                "state":"True",
                "full_name":req.session.user.full_name,
                "role":req.session.user.role
            });
            return console.log("success")
        }
        else{
            res.status(403).json({"message":"user is logged out",
                "state":"False"
            })
            return console.log("failed");
        }
    }
    catch(error){
        console.log(error.message)
    }
}



