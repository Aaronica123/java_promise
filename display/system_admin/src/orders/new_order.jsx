import "./new_order.css";
function New_order(){
    
return(
    <>
    <div className="new_ord_design">
        {/* <div className="new_ord_dash">
        </div> */}
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
                    <div className="new_ordbtn">
                        <div className="btn_text">
                            <p>All Orders</p>
                        </div>
                    </div>
                    <div className="new_ordbtn">
                        <div className="btn_text">
                            <p>Approved Orders</p>
                        </div>
                    </div>
                    <div className="new_ordbtn">
                        <div className="btn_text">
                            <p>Pendng Orders</p>
                        </div>
                    </div>
                 </div>
                 <div className="new_ord3">
                    <div className="page_count">
                        <div className="page_design">
                            <p>Page 1 of 200</p>
                        </div>
                    </div>
                    <div className="ord_table">
                    <div className="new_ord_label">
                        <div className="label1">
                            <p>Order ID</p>
                        </div>
                        <div className="label1">
                            <p>Item ID</p>
                        </div>
                        <div className="label1">
                            <p>Amount</p>
                        </div>
                        <div className="label1">
                            <p>Approval</p>
                        </div>
                        <div className="label2">
                            <p>Date</p>
                        </div>
                    </div>
                    
                    <div className="new_ord_data">
                        <div className="ord_data">
                            <p>Value</p>
                        </div>
                        <div className="ord_data">
                            <p>Value</p>
                        </div>
                        <div className="ord_data">
                            <p>Value</p>
                        </div>
                        <div className="ord_data">
                            <p>Value</p>
                        </div>
                        <div className="ord_data1">
                            <p>Value</p>
                        </div>
                    </div>
                 </div>
                    <div className="ord_btn">
                        <div className="ord_btn1">
                            <div className="btn_txt">
                                <p>Next</p>
                            </div>
                        </div>
                        <div className="ord_btn2">
                            <div className="btn_txt">
                                <p>Previous</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
)
}

export default New_order;