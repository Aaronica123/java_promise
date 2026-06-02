import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.configDotenv();
export const password=encodeURIComponent(process.env.password);
export const path=`mongodb+srv://java_refresh:${password}@cluster0.t0mdssq.mongodb.net/?appName=Cluster0`
export async function connect(){
    try{
        
        const path=`mongodb+srv://java_refresh:${password}@cluster0.t0mdssq.mongodb.net/?appName=Cluster0`
        const c=await mongoose.connect(path);
        if(c){
            console.log("connected")
        }
        else{
            console.log("failed")
        }
    }
    catch(error){
        console.log(error.message);
    }
}