
export default async function assign_sess(req,res,body){
    const{user_id,full_name,role,email}=body;
    const now=new Date().toUTCString();
    try{
    
    if(req.session.user&&req.session.user.user_id){
        req.session.user={
                user_id,
                full_name,
                role,
                email,
                time:now
            }
        await new Promise((resolve,reject)=>{
            req.session.save((erro)=>{
                if(erro){
                    reject(erro)
                    res.json({"message":"failed to update session"})
                }
                else{
                    resolve();
                    res.json({"message":"updated session"})
                }
            })
        })
    }
    else{
        await new Promise((resolve,reject)=>{
            req.session.regenerate((erro)=>{
                if(erro){
                    // res.json({"message":"failed to create new session"});
                    reject(erro);
                }
                else{
                    resolve();
                    // res.json({"message":"new session created"});
                }
            })
        })
         req.session.user={
                user_id,
                full_name,
                role,
                email,
                time:now
            }
        await new Promise((resolve,reject)=>{
            req.session.save((erro)=>{
                if(erro){
                    reject(erro);
                res.json({"message":"failed to create new session"});
                }
                else{
                    res.json({"message":"Created new user"})
                    resolve();
                }
                
            })

        })
    }
    }
    catch(error){
        console.log(error.message);
    }
}