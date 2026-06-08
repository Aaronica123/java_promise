import next from "../images/navigate/next_icon.png";
import file_complete from "../images/others/file-complete_40445.png";
import cancel from "../images/others/cancel_logo.png";
import Sidebar from "../sidebar/sidebar";
import "./register.css";
function Register_form(){
    return(
<>
<div className="register_design">
    <div className="side_dash">
        <Sidebar/>
    </div>
    <div className="register_header">
        
        <div className="register-title">
            <div className="re1">
                <h2>Registry</h2>
            </div>
            
        </div>
        <div className="register_body">
            
                <form className="form_1">
                    <div className="f1_title">
                        <p>Process Tracker</p>
                    </div>
                    <div className="f1_group">
                    <div className="f1_steps">
                        <p>Step 1</p>
                    </div>
                    <div className="f1_steps">
                        <p>Step 2</p>
                    </div>
                    </div>
                    <div className="f1_notify">
                        <div className="f1_text">
                            <p>Incomplete Profile</p>
                        </div>
                        <div className="f1_image">
                            <img src={cancel}/>
                        </div>
                    </div>
                </form>
            
            
                <form className="form_2">
                    <div className="f2_title">
                        <p>Registration Form</p>
                    </div>
                    <div className="f2_body">
                        <div className="f2_label">
                            <label>User ID</label>
                        </div>
                        <div className="f2_input">
                            <input type="number"/>
                        </div>
                    </div>
                    <div className="f2_body">
                        <div className="f2_label">
                            <label>User ID</label>
                        </div>
                        <div className="f2_input">
                            <input type="number"/>
                        </div>
                    </div>
                    <button className="f2_button">
                        <div className="btn_text"><p>Next</p></div>
                        <div className="btn_image"><img src={next}/></div>
                    </button>
                </form>
            
        </div>
        

    </div>

</div>
</>
    )
}
export default Register_form;