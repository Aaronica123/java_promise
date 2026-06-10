import { useState } from "react";
import "./view_orders.css";
import { useEffect } from "react";
import bf from "../buffer/buffer.js";
import bf_class from "../buffer/load.js";
import { Buffer } from "buffer";
function View_orders(){
        // var ck=0;
        const[ck,setck]=useState(0);
        const[l1,setl1]=useState("");
        const[l2,setl2]=useState("");
        const[l3,setl3]=useState("");
        const[l4,setl4]=useState("");
        const[l5,setl5]=useState("");
        const [ar,setar]=useState([]);
        const [fin,setfin]=useState([]);
    //    var l1="";
    //    var l2="";
    //    var l3="";
    //    var l4="";
    //    var l5="";
    function Tarm(text,count){
    //    console.log("text is "+ text);
        const s=String(text);
        const bf=Buffer.alloc(s.length);
        bf.write(s);
        // console.log(s);
        const l=Object.values(s);
        // console.log(l)
        if(ck<count){
            if(ck==1){
                setl1(bf.toString());
                setck(ck+1);
            }else if(ck==2){
                setl2(bf.toString());
                setck(ck+1);
            }
            else if(ck==3){
                setl3(bf.toString());
                setck(ck+1);
            }
            else if(ck==4){
                setl4(bf.toString());
                setck(ck+1);
            }
            else if(ck==5){
                setl5(bf.toString());
                 setck(0);
            }

        }
       }
    
        async function hold(){
            const resp=await fetch("http://localhost:3001/fetch_orders",{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                }
            })
            const sp=await resp.json();
            console.log(sp)
            console.log(sp.resp);
            const re=sp;
            const h=[]
            const vr=sp.resp;
            console.log("this is vr" + vr);
            vr.forEach((t)=>{
                const l=Object.values(t);
                l.forEach((p)=>{
                    // const l=Object.values(p);
                    console.log("vr items are "+ p)
                    fin.push(p);
                })
            })
            console.log(fin)

            h.push(Object.values(re));
            console.log(h);
            // const y=[]
            // // const k=[];
            // const y1=[];
            // const final=[];
            // const now=[];
             console.log(ar);
            const st=sp.resp;
            return {resp,fin};
            // h.forEach((j)=>{
            //     // console.log("h is "+h)
            //     // console.log("j"+j)
            //     // console.log(re)
            //     // // const h=Object.values(j);
            //     // console.log("h " + h)
            //     j.forEach((p)=>{
                   
            //         p.forEach((re)=>{
            //             console.log("read "+re);
            //             const l=Object.values(re);
            //              console.log("read values"+l);
            //              l.forEach((yu)=>{
            //                 console.log("yu is " + yu)
            //                 ar.push(yu);
            //              })
            //         })
            //         y.forEach((l2)=>{
            //             l2.forEach((kim)=>{
            //                 const l=Object.values(kim)
            //                 // kim.forEach((ol)=>{
            //                 //     console.log("ol "+ ol)
            //                 // })
            //                 y1.push(l);
            //                 console.log("var is "+ l)
            //                 y1.forEach((ol)=>{
            //                     ol.forEach((lom)=>{
            //                         console.log(lom)
            //                         final.push(lom)
            //                     })
                               
            //                 })
            //             })
                        
            //         }) }) })
                    // p.forEach((ju)=>{
                    //     k.push(Object.values(ju))
                    //     k.forEach((jus)=>{
                    //         jus.forEach((ois)=>{
                    //             console.log("ajsk "+ ois)
                    //             ar.push(ois);
                    //         })
                    //        // console.log("ajsk "+ Object.values(jus))
                    //     })
                        
                    // })
                    // console.log("pew "+p.length)
                    // console.log("pew12"+ju)
                
                // y.push(Object.values(j));
                // console.log("ARRAY"+y);
           
            // const g=sp.resp;
            // g.foreach((h)=>{
            //     console.log(h)
            // })
            // setar(final);
           
        //     if(resp.status==200){
        //         const data=await resp.json();

        //         // const bd=Object.values(data.resp);
        //         const arr=data.resp;
        //         const hd=[]
        //         arr.forEach((y)=>{
        //          hd.push(Object.values(y));
        //          })
        //          hd.forEach((p)=>{
        //             p.forEach((y)=>{
        //                 const st1=String(y);
        //                 const bf=Buffer.alloc(st1.length);
        //                 bf.write(st1);
        //                 console.log("the string is " + bf.toString())
        //                 const x=st11+1;
        //                 setst11(x);
        //                 console.log(st11)
                       
        //                 if(st11==1){
        //                     console.log("cap"+ st11)
        //                      setl1(bf.toString())
        //                 }
        //                 else if(st11==2){
        //                     setl2(bf.toString())
        //                 }
                       
                        
        //                 // sethold(bf.toString());
        //                 console.log("the length is " + p.length)
        //                 console.log(" leng " + st1);

        //                 setst(st+1);
        //                 if(st==1){
        //                     setval({l1:true,l2:false,l3:false,l4:false,l5:false})
        //                     setl1(bf.toString());
        //                     console.log("am1 "+l1);
        //                     setst(st+1);
        //                 }
        //                 if(st==2){
        //                     setval({l1:false,l2:true,l3:false,l4:false,l5:false})
        //                     setl2(bf.toString())
        //                     console.log("am2 "+l2)
        //                     setst(st+1);
        //                 }
        //                 if(st==3){
        //                     setval({l1:false,l2:false,l3:true,l4:false,l5:false})
        //                     setl3(bf.toString())
        //                     console.log("am3 "+l3)
        //                     setst(st+1);
        //                 }
        //                 if(st==4){
        //                     setval({l1:false,l2:false,l3:false,l4:true,l5:false})
        //                     setl4(bf.toString());
        //                     console.log("am4 "+l4)
        //                     setst(st+1);
        //                 }
        //                 if(st==5){
        //                     setval({l1:false,l2:false,l3:false,l4:false,l5:true})
        //                     setl5(bf.toString())
        //                     console.log("am5 "+l5);
        //                     setst(0);
        //                 }
        //             })
                    
        //          })
        //         // const res=bf(arr);
        //         // console.log(globalThis.count)
        //         // console.log("amount is " +res)
        //         // setst(globalThis.buff);
        //         // console.log("buffer has " + globalThis.buf)
        //         // const hd=new bf_class();
        //         // console.log(hd);
        //         // hd.bf(arr);
        //         // hd.get_load();
        //         // sethold(hd.get_load());

        //         // sethold(res);
        //         // const h1=[]
        //         // console.log(data.resp)
        //         // let c=0;
        //         // while(c<bd.length){
        //         //     console.log("var are "+ arr[c]);
        //         //     h1.push(Object.values(arr[c]));
        //         //      hold1.push(Object.values(arr[c]));
        //         //     c++;
        //         // }
        //         // let v1=0;
        //         // // sethold(h1);
        //         // while(v1<h1.length){
        //         //     console.log("data in array is " +hold1[v1]);
        //         //     v1++;
        //         // }
  
        //     }
        // }
}
      
      useEffect(()=>{
       async function d1(){
         const dt=await hold();
         if(dt.resp.status==200){
        console.log("connection success");
        const bd=dt.st;
        // setar(bd);
        // console.log(ar);
        // ar.foreach((p)=>{
        //     console.log(p);
        // })
        console.log(bd)
        
        
        const arr=bd;
       console.log("type is "+ arr.type);
        const y=[];
        // arr.forEach((are)=>{
        //     console.log(are);
        //     y.push(Object.values(are));
        //     console.log(y);
        // }) ;
        // // console.log("y is "+ y);

        // arr.forEach((value)=>{
        //     // console.log("value is " + value)
        //     value.forEach((v)=>{
        //         const st=String(v);
        //         const len=value.length;
        //         Tarm(st,len);
        //     })
        // })
        // console.log(arr);
       }
       else{
        console.log("failed connection")
       }
       }
   
       
       d1();
    },[]);
    
    return(<>
    <div className="view_orders_design">
        {/* <div className="view_dash">

        </div> */}
        <div className="view_orders">
            <div className="view_orders_header">
                <div className="view_orders_title">
                    <p>Orders Dashboard</p>
                </div>
            </div>
            <div className="view_orders_body">
                <div className="view_orders_1">
                    <div className="view_orders_name">
                        <p>view Orders</p>
                    </div>
                </div>
                <div className="view_orders_2">
                    <div className="view_orders_btn1">
                        <div className="view_name">
                        <p>All Orders</p>
                        </div>
                    </div>
                    <div className="view_orders_btn2">
                        <div className="view_name">
                            <p>Approved Orders</p>
                        </div>
                    </div>
                    <div className="view_orders_btn3">
                        <div className="view_name">
                            <p>Pending Orders</p>
                        </div>
                    </div>
                </div>
                <div className="view_orders_3">
                    <div className="view_label">
                        <div className="view_label1">
                            <div className="view_l_name">
                                <p>Order ID</p>
                            </div>
                        </div>
                        <div className="view_label2">
                            <div className="view_l_name">
                                <p>Item ID</p>
                            </div>
                        </div>
                        <div className="view_label3">
                            <div className="view_l_name">
                                <p>Amount</p>
                            </div>
                        </div>
                        <div className="view_label4">
                            <div className="view_l_name">
                                <p>Approval</p>
                            </div>
                        </div>
                        <div className="view_label5">
                            <div className="view_l_name">
                                <p>Date</p>
                            </div>
                        </div>

                    </div>
                    <div className="view_labeld">
                        <div className={"view_label1"}>
                            <div className="view_l_name">
                                <p>{l1}</p>
                            </div>
                        </div>
                        <div className={"view_label2"}>
                            <div className="view_l_name">
                                <p>{l2}</p>
                            </div>
                        </div>
                        <div className={"view_label3"}>
                            <div className="view_l_name">
                                <p>{l3}</p>
                            </div>
                        </div>
                        <div className={"view_label4"}>
                            <div className="view_l_name">
                                <p>{l4}</p>
                            </div>
                        </div>
                        <div className={"view_label5"}>
                            <div className="view_l_name">
                                <p>{l5}</p>
                            </div>
                        </div>

                    </div>
                    <div className="view_labeld">
                        <div className="view_label1">
                            <div className="view_l_name">
                                <p>1001</p>
                            </div>
                        </div>
                        <div className="view_label1">
                            <div className="view_l_name">
                                <p>00101</p>
                            </div>
                        </div>
                        <div className="view_label1">
                            <div className="view_l_name">
                                <p>900</p>
                            </div>
                        </div>
                        <div className="view_label1">
                            <div className="view_l_name">
                                <p>Approved</p>
                            </div>
                        </div>
                        <div className="view_label1">
                            <div className="view_l_name">
                                <p>11 Wed 2019</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    </>)
}

export default View_orders;