import { useEffect, useState } from "react";
import "./new_order.css";

function New_order() {
    const [hold, setHold] = useState([]);

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
                        <button className="new_ordbtn">
                            <div className="btn_text"><p>All Orders</p></div>
                        </button>
                        <button className="new_ordbtn">
                            <div className="btn_text"><p>Approved Orders</p></div>
                        </button>
                        <button className="new_ordbtn">
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