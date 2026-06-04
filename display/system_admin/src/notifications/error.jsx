import failed from "../images/navigate/error_image.png";
import back from "../images/navigate/back_arrow.png";
import "./er.css";
function Error(){
    
    return(
        <>
        <div className="body1">
            <div className="image1">
                <img src={failed}/>
            </div>
            <div className="message1">
                <p>An error occurred</p>
            </div>
            <div className="text1">
                <div className="p11">
                    <img src={back}/>
                </div>
                <div className="p21">
                    <p>Go Back</p>
                </div>
            </div>

        </div>
        </>
    )
}
export default Error;