function Load(value){
    return value;
};
import {Buffer} from "buffer";
class bf_class{
    constructor (){
        this.value=null;
    }
    get_load(){
        return this.value;
    }
    set_load(value){
        this.value=value;
    }
    bf(arr){
 try{
    const ar=arr;
    const hd=[];
    ar.forEach((y)=>{
        hd.push(Object.values(y));
    })
    hd.forEach((y)=>{
        y.forEach((p)=>{
         const st=String(p)
         const nw=Buffer.alloc(st.length);
         nw.write(st);
         
        globalThis.p2=true;
        globalThis.count+=1;
        console.log(nw.toString())
         
        
        globalThis.count=-1;
        globalThis.p2=false;
        console.log()
        this.set_load(nw.toString());
        return nw.toString();
       
    })})
}
 catch(error){
    console.log(error.message);
 }
}


}
export default bf_class;