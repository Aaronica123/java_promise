

export default function check(li,req){
    // console.log(req.session);
    
    const state=false
    const op=true;
    console.log(req.session.user);
        if(!req.session.user){
            //res.json({"message":"session not created yet"});
            console.log("d1");
            console.log(req.session.user);
            return state;
        }
        const ty=req.session.user.role;
        console.log(li)
        if(li.includes(ty)){
            
           //res.json({"message":"authenticated"});
           console.log("d2")
           return op;
        }

    if(!li.includes(ty)){
        //res.json({"message":"permission denied"});
        console.log("d3"+ req.session.user.role);
        return state;
    }
}

