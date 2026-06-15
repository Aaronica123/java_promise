class set_session{
    static check(bd){
    if(bd.state){
        // sessionStorage.setItem("user_id",bd.user_id);
        sessionStorage.setItem("full_name",bd.full_name);
        sessionStorage.setItem("role",bd.role)
        sessionStorage.setItem("auth",true);  
    }
    }
   static setrole(bd,body){
        if(bd){
            this.check(body);
        } 
        else{
            this.deleterole();
        }
    }
   static getrole(){
    const auth=sessionStorage.getItem("auth");
        if(auth){
            const full_name=sessionStorage.getItem("full_name")
            const role=sessionStorage.getItem("role")
            const data={
                full_name,
                role,
                "message":"User is logged in",
                "state":true
            }
            return data;
        }
        else{
            const data={
                "message":"Not logged in",
                "state":false
            }
            return data;
        }
    }
   static deleterole(){
        sessionStorage.removeItem("full_name");
        sessionStorage.removeItem("role");
        sessionStorage.removeItem("auth");
        // sessionStorage.clear();
    }
    // static direct(){
    //     const dr=this.getrole();
    //     if(dr.role=="Investor")
    // }

}

export default set_session;

