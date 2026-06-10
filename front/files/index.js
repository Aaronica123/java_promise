import { connect } from "./connect.js";
import app from "./app.js";


async function start(){
    try{
        connect();
        app.listen(3001);
        console.log("success");
    }
    catch(error){
        console.log(error.message);
    }
}
start();


