import express from "express";
import session from "express-session";
import { password,path } from "./connect.js";
import { new_login } from "./actions/login.js";
import { login } from "./actions.js";
import { Register } from "./actions/register.js";
import MongoStore from "connect-mongo";
import { status } from "./sessions/check_status.js";
const app=express();

const config={
    secret:password,
    resave:false,
    saveUninitialized:false,
    store:MongoStore.create({
        mongoUrl:path,
        collectionName:"login_sessions",
        ttl:10000,
        touchAfter:10,
        autoRemove:"native",
    })
    
}
app.use(session(config));
app.use(express.json());
app.post("/log",login);
app.post("/reg",Register);
app.post("/new/login",new_login);
app.get("/status",status);
export default app;
