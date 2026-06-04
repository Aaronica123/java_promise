
import "./logout.css";
import back from "../images/navigate/back_arrow.png";
import alert from "../images/navigate/alert_logo.png";
function Logout(){
    return (
        <>
        <div className="log_body">
            <div className="log_image">
                <img src={alert}/>
            </div>
            <div className="log_message">
                Are you sure you want to Logout
            </div>
            <div className="log_text">
                <div className="log1">
                <div className="log_p1">
                    <img src={back}/>
                </div>
                <div className="log_p2">
                    <p>Go Back</p>
                </div>
                </div>
                <div className="log2">
                <div className="log_p2p">
                    <p>Proceed To Logout</p>
                </div>
                </div>

            </div>

        </div>
        </>
    )
}

export default Logout;