import { useState } from "react";
import "./view_orders.css";
import { useEffect } from "react";
function View_orders(){
    const[hold1,sethold]=useState([]);
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
                const bd=Object.values(data.resp);
                const arr=data.resp;
                const h1=[]
                console.log(data.resp)
                let c=0;
                while(c<bd.length){
                    console.log("var are "+ arr[c]);
                    h1.push(Object.values(arr[c]));
                     hold1.push(Object.values(arr[c]));
                    c++;
                }
                let v1=0;
                // sethold(h1);
                while(v1<h1.length){
                    console.log("data in array is " +hold1[v1]);
                    v1++;
                }
               
                
                
                console.log("length is"+bd.length);
                const l=bd.length;
                let h=[]
                let x=0;
            while(x<l){
                h.push(bd[x]);
                x++;
                }
                console.log(1)
                let y=0;
               while( y<h.length){
                    console.log("amount is " +bd[x])
                    y++;
                }
              console.log(h.length);  
            }
        }
        hold();
    },[])
    
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
                        <div className="view_label1">
                            <div className="view_l_name">
                                <p>1001</p>
                            </div>
                        </div>
                        <div className="view_label2">
                            <div className="view_l_name">
                                <p>00101</p>
                            </div>
                        </div>
                        <div className="view_label3">
                            <div className="view_l_name">
                                <p>900</p>
                            </div>
                        </div>
                        <div className="view_label4">
                            <div className="view_l_name">
                                <p>Approved</p>
                            </div>
                        </div>
                        <div className="view_label5">
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