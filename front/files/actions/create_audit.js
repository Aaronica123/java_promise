import audit_obj from "../models/audits_model.js";

export default async function create(req){
try{
    if(!req.session.user){
        // res.status(404).json({"message":"Invalid session"});
        return console.log("the session is yet tobe created");
    }
// const time=req.session.user.time;
const{user_id,description,now,full_name}=req.session.audit;
const act=req.method;
await audit_obj.create({
    user_id,
    time:now,
    action:act,
    description,
    full_name
   
})
// res.status(201).json({"message":"audit created"});
console.log("created audit");
}
catch(error){
    console.log(error.message);
}
}