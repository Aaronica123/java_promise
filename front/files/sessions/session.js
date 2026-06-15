
export default async function assign_sess(req,res,body){
    const{user_id,full_name,role,email}=body;
    const now=new Date().toUTCString();
    try{
    console.log(req.sessionID)
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
                    res.status(409).json({"message":"failed to update session",
                        "state":false
                    })
                }
                else{
                    resolve();
                   return res.status(200).json({"message":"updated session",
                    "full_name":full_name,
                    "email":email,
                    "state":true,
                    "role":role
                    
                   })
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
                return res.status(409).json({"message":"failed to create new session",
                    "state":false
                });
                }
                else{
                resolve();
                return res.status(200).json({"message":"Created new user",
                    "full_name":full_name,
                    "email":email,
                    "state":true,
                    "role":role
                })
                    
                }
                
            })

        })
    }
    }
    catch(error){
        console.log(error.message);
    }
}