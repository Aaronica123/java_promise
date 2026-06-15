import { useEffect, useState } from "react";
import "./new_order.css";
import Sidebar from "../sidebar/sidebar";
import New_sidebar from "../sidebar/new_sidebar";
import New_sidebar12 from "../sidebar/new_sidebar2";
import Approve_order from "../dashboards/approve_order";
function New_order() {
    const [hold, setHold] = useState([]);
    const [btn,setbtn]=useState(
       { btn1:true,btn2:false,btn3:false}
    )
    function b1(){
        setbtn({btn1:true,btn2:false,btn3:false});
        setindex(1);
        data();
          setap(false);
          
    }
    function b2(){
        setbtn({btn1:false,btn2:true,btn3:false});
        setindex(1);
       approved();
         setap(false);
         
        
    }
    function b3(){
        setbtn({btn1:false,btn2:false,btn3:true});
        setindex(1);
       pending();
    }
    const [ap,setap]=useState(false);
    const [row,setrow]=useState();
    function cl(index,row){
        console.log(index);
        console.log(row);
        setap(true);
        setrow(row);
        setind(index);
        
    }
    const[in1,setind]=useState()
    function get(){
        return row;
    }
    const [index,setindex]=useState(1);
    function next(){
        if(index>=page){
            setindex(page);
        }else{
        setindex(index+1);
        }
    }
    function back(){
        if(index==1){
            setindex(1);
        }else{
            setindex(index-1);
        }
        
    }
    const approved=async()=>{
        try{
            const resp=await fetch("http://localhost:3001/fetch_approved",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    "index":index
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
                    "index":index
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
    const [page,setpage]=useState(null);
    const data = async () => {
        const ft = await fetch("http://localhost:3001/page", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                "index": index
            })
        });
        const da = await ft.json();
        setpage(da.pages);
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
    useEffect(()=>{
        if(index>0){

        
        try{
            if(btn.btn1){
               data();
            }
            else if(btn.btn2){
                approved();
            }
            else if(btn.btn3){
                pending();
            }
        }
        catch(error){
console.log(error.message);
        }
    }
    },[index])
    return (
        <>
        <div className="new_ord_design">
            <div className="new_ord_dash">
                <New_sidebar12/>
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
                                <p>Page {index} of {page}</p>
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
                                    <div className="ord_1w" key={rowIndex} onClick={btn.btn3?()=>cl(rowIndex,row):""}>
                                        {in1==rowIndex?<div>
                                                    {ap?<Approve_order value={get()}/>:""}
                                        </div>:""}
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
                            <button className="ord_btn1" onClick={back}>
                                <div className="btn_txt"><p>Previous</p></div>
                            </button>
                            <button className="ord_btn2" onClick={next}>
                                <div className="btn_txt"><p>Next</p></div>
                            </button>
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