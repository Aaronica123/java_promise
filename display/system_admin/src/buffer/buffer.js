import {Buffer} from "buffer";
// import bf_class from "./load.js";
function bf(arr){
 try{
    const ar=arr;
    const hd=[];
    const ar1=[]
    ar.forEach((y)=>{
        hd.push(Object.values(y));
    })
    hd.forEach((y)=>{
        for(const p of y){
         const st=String(p)
         const nw=Buffer.alloc(st.length);
         nw.write(st);
         
        globalThis.p2=true;
        globalThis.count+=1;
        console.log(nw.toString())
        globalThis.buff=nw.toString();
        ar1.push(nw.toString);       
           }
        for (const p1 of ar1){
            const st=String(p1);
            const b1=Buffer.alloc(st.length);
            b1.write(st);
            return b1.toString();
        }
        globalThis.count=-1;
        globalThis.p2=false;
        
        //bf_class.Load(nw.toString());
        // const cl=new bf_class();
        // cl.Load(nw.toString());
       
       
 })
}
 catch(error){
    console.log(error.message);
 }
}
export default bf;

