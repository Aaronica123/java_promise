
import notification from "../images/others/notifications_logo.png";
import profile from "../images/others/profile_logo.png";
import Sidebar from "../sidebar/sidebar";
import "./registry.css";
function Dash_1(){

    return(
    <>
    <div className="dash_design">
    <div className="dash_side">
        <Sidebar/>

    </div>
    <div className="dash_1">
        <div className="dash_head">
            <div className="dash_tx">
                <p>Dashboard</p>
            </div>
            
        </div>
        <div className="dash_body">
        <div className="dash_up">
            <div className="dash_time">
                <div className="dash_t1">
                    <p>Time Clocked In</p>
                </div>
                <div className="dash_t2">
                    <p>00:00:00</p>
                </div>
            </div>
            <div className="dash_notifications">
                <div className="dash_n1">
                    <div className="dash_nt">
                        <p>View All Notifications</p>
                    </div>
                    <div className="dash_image">
                        <img src={notification}/>
                    </div>
                </div>
                <div className="dash_n2">
                    <div className="dash_nt">
                        <p>View Profile</p>
                    </div>
                    <div className="dash_image">
                        <img src={profile}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="dash_down">
            <div className="dash_alerts">
                <div className="dash_title">
                    <p>Company Alerts</p>
                </div>
                <div className="dash_view">
                    <div className="dash_data">
                        <div className="data_body">
                            <p>Company Alert</p>
                        </div>
                        <div className="data_body">
                            <p>Company Alert</p>
                        </div>
                        <div className="data_body">
                            <p>Company Alert</p>
                        </div>
                    </div>
                    <div className="dash_click">
                        <div className="dash_btn_alerts">
                            <p>View Alerts</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="dash_tasks">
                <div className="dash_title">
                    <p>Pending Tasks</p>
                </div>
                <div className="dash_list">
                <div className="dash_body">
                    <p>Pending Task</p>
                </div>
                <div className="dash_body">
                    <p>Pending Task</p>
                </div>
                <div className="dash_body">
                    <p>Pending Task</p>
                </div>
                </div>
                <div className="dash_btn_tasks">
                    <p>View All Tasks</p>
                </div>

            </div>
        </div>
</div>
    </div>
    </div>
    </>)
}
export default Dash_1;