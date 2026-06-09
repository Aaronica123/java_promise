import "./view_orders.css"
function View_orders(){
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