import express from "express";
import session from "express-session";
import { password,path } from "./connect.js";
import { new_login } from "./actions/login.js";
import { login } from "./actions.js";
import { Register } from "./actions/register.js";
import MongoStore from "connect-mongo";
import { status } from "./sessions/check_status.js";
import { view_audits } from "./actions/view_audit.js";
import create_item from "./actions/create_item.js";
import create_order from "./actions/orders/create_order.js";
import approve_order from "./actions/orders/approve_order.js";
import cors from "cors";
import delete_session from "./sessions/delete.js";
import fetch_orders from "./actions/orders/fetch_order.js";

import { fetch_roles } from "./actions/fetch_roles.js";
const app=express();

app.use(cors({
    origin: 'http://localhost:5173', // Your React app's URL
    credentials: true, // Important if you're using sessions
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
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
app.get("/view_audits",view_audits);
app.post("/create_item",create_item);
app.post("/create_order",create_order);
app.post("/approve_order",approve_order);
app.delete("/delete_session",delete_session);
app.get("/fetch_roles",fetch_roles);
app.get("/fetch_orders",fetch_orders);

export default app;
