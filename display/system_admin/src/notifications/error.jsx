import failed from "../images/navigate/error_image.png";
import back from "../images/navigate/back_arrow.png";
import "./success.css";
function Error(req){
    const ch=req.ch
    return(
        <>
        <div className="body">
            <div className="image">
                <img src={failed}/>
            </div>
            <div className="message">
                <p>An error occurred</p>
            </div>
            <div className={ch?"text":"timer"}>
                <div className="p1">
                    <img src={back}/>
                </div>
                <div className="p2">
                    <p>Go Back</p>
                </div>
            </div>

        </div>
        </>
    )
}
export default Error;