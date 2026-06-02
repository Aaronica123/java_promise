
export async function login(req,res){
    const {user_id,full_name}=req.body;
    try{
        
        const now=new Date().toISOString();
        
        // console.log("item is "+ req.session.user.user_id)
        console.log("1")
        if(req.session.user&&req.session.user.user_id==user_id){
            req.session.user={
                user_id,
                full_name,
                time:now
            }
            await new Promise((resolve,reject)=>{
                req.session.save((error)=>{
                    if(error){
                        console.log("failed")
                        reject(error);
                    }
                    else{
                        console.log("saved and updated");
                        resolve();
                         res.json({"message":req.sessionID});
                        
                    }
                })
            });
        }
        else{
    await new Promise((resolve,reject)=>{

        req.session.regenerate((err)=>{
        if(err){
            console.log("fail");
            reject(err);
        }
        else{
            console.log("done");
            resolve();
        }
    })});
    req.session.user={
                user_id,
                full_name,
                time:now
            }
    await new Promise((resolve,reject)=>{
    req.session.save((error)=>{
        if(error){
            reject(error);
            console.log("failed to save");
        }
        else{
            resolve();
            console.log("saved new session");
        }
 })}).then(()=>{
    res.json({"message":"session is new"})
 })
        }


   
    
     }
    catch(error){
        console.log(error.message);
    }
    console.log(req.session.user);
};