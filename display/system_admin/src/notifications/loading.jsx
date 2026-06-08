import load from "../images/navigate/loading_icon.png";
import './loading.css';
function Load(){

    return (
        <>
        <div className="load_body">
            <div className="load_image">
                <img src={load}/>
            </div>
            <div className="load_text">
                <p>Logging In Please Wait</p>
            </div>

        </div>
        </>
    )

}
export default Load;