
import notification from "../images/others/notifications_logo.png";
import profile from "../images/others/profile_logo.png";
import Sidebar from "../sidebar/sidebar";
import "./dashboard.css";
import New_sidebar from "../sidebar/new_sidebar";
function Dash_2(){

    return(
    <>
    <div className="dashboard_design">
    <div className="dashboard_side">
        <New_sidebar/>

    </div>
    <div className="dashboard_1">
        <div className="dashboard_head">
            <div className="dashboard_tx">
                <h1>Dashboard</h1>
            </div>
            
        </div>
        <div className="dashboard_body">
        <div className="dashboard_up">
            <div className="dashboard_grp1">
                <div className="dashboard_time">
                    <div className="dashboard_t1">
                        <p>Time Clocked In</p>
                    </div>
                    <div className="dashboard_t2">
                        <p>00:00:00</p>
                    </div>
                </div>
            </div>
            <div className="dashboard_notifications">
                <div className="dashboard_n1">
                    <div className="dashboard_nt">
                        <p>View Notifications</p>
                    </div>
                    <div className="dashboard_image">
                        <img src={notification}/>
                    </div>
                </div>
                <div className="dashboard_n2">
                    <div className="dashboard_nt">
                        <p>View Profile</p>
                    </div>
                    <div className="dashboard_image">
                        <img src={profile}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="dashboard_down">
            <div className="dashboard_alerts">
                <div className="d_title">
                <div className="dashboard_title">
                    <p>Pending Tasks</p>
                </div>
                </div>
                <div className="dashboard_view">
                    <div className="dashboard_data">
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
                </div>
                <div className="d_btn">
                    <div className="dashboard_click">
                        <div className="dashboard_btn">
                            <p>View Tasks</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="dashboard_tasks">
                <div className="d_3title">
                <div className="dashboard_title1">
                    <h3>Company Alerts</h3>
                </div>
                </div>
                <div className="d_4body">
                    <div className="d_part1">
                        <div className="d_data">
                            <div className="data_dash">
                                <p>Registry 1</p>
                            </div>
                        </div>
                        <div className="d_data">
                            <div className="data_dash">
                                <p>Registry 1</p>
                            </div>
                        </div>
                        <div className="d_data">
                            <div className="data_dash">
                                <p>Registry 1</p>
                            </div>
                        </div>

                    </div>
                    <div className="d_part2">
                        <div className="d_arrange">
                            <div className="d_next">
                                <div className="next_text">
                                    <p>Next</p>
                                </div>
                            </div>
                            <div className="d_back">
                                <div className="back_text">
                                    <p>Back</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
</div>
    </div>
    </div>
    </>)
}
export default Dash_2;