import { useEffect, useState } from "react";
import "./approve_order.css"
function Approve_order(value){
    
    const [frm]=useState({
        item_id:"",order_id:"",amount:0,date:"",approval:""
    })
    const [arr1,setarr]=useState([]);
    const [tr,settr]=useState(true);
    const update=async(e)=>{
        e.preventDefault();
        if(!frm.item_id||!frm.amount||!frm.approval||!frm.date||!frm.order_id){
            return (alert("All values should be entered"));
        }
        else{
            const resp=await fetch("http://localhost:3001",{})
        }
    }
    useEffect(()=>{
        if(tr){

       
        const arr=Object.values(value.value);
        
        console.log("value is "+arr);
        setarr(arr);
        // setform(arr);
        arr.forEach((row_data,rowIndex)=>{
             
            if(rowIndex%5==0){
                frm.item_id=row_data
                console.log(rowIndex)
              console.log(row_data)
            }
            if(rowIndex%5==1){
                frm.order_id=String(row_data)
                console.log(rowIndex)
              console.log(row_data)
            }if(rowIndex%5==2){
                frm.amount=String(row_data)
                console.log(rowIndex)
              console.log("2 is " + String(row_data))
            }if(rowIndex%5==3){
                frm.approval=String(row_data)
                console.log(rowIndex)
              console.log("3 is " + row_data)
            }else if(rowIndex%5==4){
                frm.date=row_data
                console.log(rowIndex)
              console.log(row_data)
            }
        })
        settr(false);
     }
    },[tr])
    return (
        <>
        <div className="approve_bd">
        <div className="approve_design">
            <div className="approve_body">
                <div className="approve_part1">
                    <div className="approve_title">
                        <h2>Order Details</h2>
                    </div>
                </div>
                <div className="approve_part2">
                    <div className="approve_data">
                        <div className="approve_grp">
                            <div className="approve_text">
                                <p>Order ID :</p>
                            </div>
                            <div className="approve_value">
                                <p>{frm.order_id}</p>
                            </div>
                        </div>
                         <div className="approve_grp">
                            <div className="approve_text">
                                <p>Item ID :</p>
                            </div>
                            <div className="approve_value">
                                <p>{frm.item_id}</p>
                            </div>
                        </div>
                         <div className="approve_grp">
                            <div className="approve_text">
                                <p>Amount :</p>
                            </div>
                            <div className="approve_value">
                                <p>{frm.amount}</p>
                            </div>
                        </div>
                         <div className="approve_grp">
                            <div className="approve_text">
                                <p>Approval :</p>
                            </div>
                            <div className="approve_value">
                                <p>{frm.approval}</p>
                            </div>
                        </div>
                         <div className="approve_grp">
                            <div className="approve_text">
                                <p>Date :</p>
                            </div>
                            <div className="approve_value">
                                <p>{frm.date}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="approve_part3">
                    {/* <div className="approve_btn_body"> */}
                        <button className="approve_btn">
                            <div className="approve_btn_text">
                                <p>APPROVE</p>
                            </div>
                        </button>
                    {/* </div> */}
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Approve_order;