import { useState } from "react";
import "./create_order.css"
function Create_order(){
    const [form,setForm]=useState({
        order_id:"",item_id:"",amount:""
    })
    const change=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const submit=async(e)=>{
        e.preventDefault();
        const resp=await fetch("http://localhost:3001/create_order",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            credentials:"include",
            body:JSON.stringify({
                "order_id":form.order_id,
                "item_id":form.item_id,
                "amount":form.amount
            })
        })
        if(resp.status==200||resp.status==201){
            alert("succesfully placed order");
        }
        else{
            alert("server error");
        }
    }

    return(
        <>
        <div className="create_order_design">
            {/* <div className="create_order_dash">

            </div> */}
            <div className="create_order_body">
                <div className="create_order">
                    <div className="create_title">
                        <h1>REGISTRATION</h1>
                    </div>
                </div>
                <div className="create_order_form">
                    
                    {/* <div className="create_order2"> */}
                        <div className="create_order_p1">
                            <div className="create_order_grp">
                                <div className="create_order1">
                                 <div className="create_order_frm">
                                 <h3>Registration Form</h3>
                                 </div>
                                </div>
                                <div className="create_order_label">
                                    <div className="create_order_l1">
                                        <label>Order ID</label>
                                    </div>
                                    <div className="create_order_input">
                                        <input type="number" name="order_id"
                                        value={form.order_id} onChange={change}
                                        />
                                    </div>
                                </div>
                                <div className="create_order_label">
                                    <div className="create_order_l1">
                                        <label>Item ID</label>
                                    </div>
                                    <div className="create_order_input">
                                        <input type="number" name="item_id"
                                        value={form.item_id} onChange={change}
                                        />
                                    </div>
                                </div>
                                <div className="create_order_label">
                                    <div className="create_order_l1">
                                        <label>Amount</label>
                                    </div>
                                    <div className="create_order_input">
                                        <input type="number" name="amount"
                                        value={form.amount} onChange={change}
                                        />
                                    </div>
                                </div>
                                <div className="create_order_btn">
                                    <button className="order_btn" type="submit" onClick={submit}>
                                        <div className="order_btn_text">
                                            <p>Order</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="create_order_p2">
                            <div className="tracker_bd">

                            
                            <div className="create_order_track_title">
                                <div className="track_h2">
                                    <h2>Registration Tracker</h2>
                                </div>
                            </div>
                            <div className="create_order_track">
                                <div className="create_order_text">
                                    <div className="create_order_p">
                                        <p>Order ID</p>
                                    </div>
                                </div>
                                <div className="create_order_text">
                                    <div className="create_order_p">
                                        <p>Item ID</p>
                                    </div>
                                </div>
                                <div className="create_order_text">
                                    <div className="create_order_p">
                                        <p>Amount</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
            </div>

        </div>
        </>
    )
}

export default Create_order;