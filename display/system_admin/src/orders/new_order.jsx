import { useEffect, useState } from "react";
import "./new_order.css";
import Sidebar from "../sidebar/sidebar";

function New_order() {
    const [hold, setHold] = useState([]);
    const [btn,setbtn]=useState(
       { btn1:true,btn2:false,btn3:false}
    )
    function b1(){
        setbtn({btn1:true,btn2:false,btn3:false});
        data();
    }
    function b2(){
        setbtn({btn1:false,btn2:true,btn3:false});
       approved();
        
    }
    function b3(){
        setbtn({btn1:false,btn2:false,btn3:true});
       pending();
    }
    const approved=async()=>{
        try{
            const resp=await fetch("http://localhost:3001/fetch_approved",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    "index":0
                })
            })
            const da=await resp.json();
            const row=da.data.map((row)=>Object.values(row));
            setHold(row);
        }
        catch(error){
            console.log(error.message);
        }
    }
    const pending=async()=>{
        try{
            const ft=await fetch("http://localhost:3001/pending",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    "index":0
                })
            })
            const da=await ft.json();
            const row=da.data.map((row)=>Object.values(row));          
            setHold(row);
        }
        catch(error){
            console.log(error.message);
        }
    }
    
    const data = async () => {
        const ft = await fetch("http://localhost:3001/page", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                "index": 0
            })
        });
        const da = await ft.json();
        const rows = da.data.map((row) => Object.values(row));
        setHold(rows);
    };

    useEffect(() => {
        try {
            data();
        } catch (error) {
            console.log(error.message);
        }
    }, []);

    return (
        <>
        <div className="new_ord_design">
            <div className="new_ord_dash">
                <Sidebar/>
            </div>
            <div className="new_ord_body">
                <div className="new_ord_head">
                    <div className="new_ord_title">
                        <h1>Fetch Orders</h1>
                    </div>
                </div>
                <div className="new_ord_tb">
                    <div className="new_ord1">
                        <div className="new_ord1_title">
                            <h3>View Orders Table</h3>
                        </div>
                    </div>
                    <div className="new_ord2">
                        <button className={btn.btn1?"active":"inactive"} onClick={b1}>
                            <div className="btn_text"><p>All Orders</p></div>
                        </button>
                        <button className={btn.btn2?"active":"inactive"} onClick={b2}>
                            <div className="btn_text"><p>Approved Orders</p></div>
                        </button>
                        <button className={btn.btn3?"active":"inactive"} onClick={b3}>
                            <div className="btn_text"><p>Pending Orders</p></div>
                        </button>
                    </div>
                    
                    
                    <div className="new">                    
                    <div className="new_ord3">
                        <div className="page_count">
                            <div className="page_design">
                                <p>Page 1 of 200</p>
                            </div>
                        </div>
                        <div className="ord_table">
                            <div className="new_ord_label">
                                <div className="label1"><p>Order ID</p></div>
                                <div className="label1"><p>Item ID</p></div>
                                <div className="label1"><p>Amount</p></div>
                                <div className="label1"><p>Approval</p></div>
                                <div className="label2"><p>Date</p></div>
                            </div>
                            <div className="new_ord_data">
                                {hold.map((row, rowIndex) => (
                                    <div className="ju">
                                    <div className="ord_1w" key={rowIndex}>
                                        {row.map((col, colIndex) => (
                                            
                                            <div
                                                className={colIndex === 4 ? "ord_data1" : "ord_data"}
                                                key={colIndex}
                                            >
                                                <p>{String(col)}</p>
                                            </div>
                                            
                                        ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="ord_btn">
                            <div className="ord_btn1">
                                <div className="btn_txt"><p>Next</p></div>
                            </div>
                            <div className="ord_btn2">
                                <div className="btn_txt"><p>Previous</p></div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default New_order;