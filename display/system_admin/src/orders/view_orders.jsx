import { useState } from "react";
import "./view_orders.css";
import { useEffect } from "react";
import bf from "../buffer/buffer.js";
import bf_class from "../buffer/load.js";
import { Buffer } from "buffer";
function View_orders(){
    const[hold1,sethold]=useState();
    const [st,setst]=useState(0);
    useEffect(()=>{
        async function hold(){
            const resp=await fetch("http://localhost:3001/fetch_orders",{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                }
            })
            if(resp.status==200){
                const data=await resp.json();

                // const bd=Object.values(data.resp);
                const arr=data.resp;
                const hd=[]
                arr.forEach((y)=>{
                 hd.push(Object.values(y));
                 })
                 hd.forEach((p)=>{
                    p.forEach((y)=>{
                        const st1=String(y);
                        const bf=Buffer.alloc(st1.length);
                        bf.write(st1);
                        console.log("the string is " + bf.toString())
                        sethold(bf.toString());
                        console.log("the length is " + p.length)
                        console.log(" leng " + st1);
                        if(st<p.length){
                            setst(st+1);
                            console.log("length " + st1);
                        }
                        else{
                            setst(0);
                        }

                    })
                    
                 })
                // const res=bf(arr);
                // console.log(globalThis.count)
                // console.log("amount is " +res)
                // setst(globalThis.buff);
                // console.log("buffer has " + globalThis.buf)
                // const hd=new bf_class();
                // console.log(hd);
                // hd.bf(arr);
                // hd.get_load();
                // sethold(hd.get_load());

                // sethold(res);
                // const h1=[]
                // console.log(data.resp)
                // let c=0;
                // while(c<bd.length){
                //     console.log("var are "+ arr[c]);
                //     h1.push(Object.values(arr[c]));
                //      hold1.push(Object.values(arr[c]));
                //     c++;
                // }
                // let v1=0;
                // // sethold(h1);
                // while(v1<h1.length){
                //     console.log("data in array is " +hold1[v1]);
                //     v1++;
                // }
  
            }
        }
        hold();
    },[st]);
    
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
                                <p>{st==1?hold1:""}</p>
                            </div>
                        </div>
                        <div className={"view_label2"}>
                            <div className="view_l_name">
                                <p>{st==2?hold1:""}</p>
                            </div>
                        </div>
                        <div className={"view_label3"}>
                            <div className="view_l_name">
                                <p>{st==3?hold1:""}</p>
                            </div>
                        </div>
                        <div className={"view_label4"}>
                            <div className="view_l_name">
                                <p>{st==4?hold1:""}</p>
                            </div>
                        </div>
                        <div className={"view_label5"}>
                            <div className="view_l_name">
                                <p>{st==5?hold1:""}</p>
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