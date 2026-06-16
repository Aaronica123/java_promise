RETRO INDUSTRIES ORDERING SYSTEM

Problem Statement.
Businesses undertake procurement of items and equipment’s that are used to upgrade and keep the business infrastructure going. However, the manner of which this procurement process is done is crucial as any mishaps may result in financial loss, overspending, or purchasing of unnecessary items. The traditional way of ordering involves the ordering team creating orders and sending them to higher ups for approval however there are issues of duplicates and alteration of orders amongst higher ups leading to integral breaches and over purchases. 

Solution.
Retro Industries Ordering System is built to solve this problem. By prioritizing integrity and limiting on system accessibility to roles this system is built to ensure business orders are placed transparently and states are maintained between each phase.

Structure.

Framework

Node JS - Backend

Mongo DB - Database

React JS -Frontend

Architecture.

Monolithic Architecture.

Client Server Architecture.

Role based access.

Users and Roles.
Vendor User: Logs in the system, enters order, order is saved as pending.

Investor User: Logs in the system, views all orders, views pending orders, approves orders.

Security User: Logs in the system, views audit logs for analysis.

Registry User: Logs in the system, registers a new user and assigns role.



System Design. 

Vendor User

<img width="409" height="139" alt="image" src="https://github.com/user-attachments/assets/3b7a63e8-7058-4f79-91f4-2ee5ddeaa882" />

Investor User

<img width="401" height="277" alt="image" src="https://github.com/user-attachments/assets/01306881-e842-4dd7-82d1-6c70e844ab5a" />


















Processes.
User logs in the system. 

System checks the role registered for user and directs to respective dashboard.

User access an interface item on sidebar.

System checks if the interface is assigned to the role of the user.

System opens interface if role matches.

System redirects to login if role do not match.

Limitations.

Vendors cannot enter duplicate orders.

Vendors cannot approve orders.

Investors cannot create orders.

Benefits.
Security is prioritized as each user is limited to their action.
Principle of least privilege is met.
User roles are clearly defined.
Audit logs record all actions done by each active user.

User Interface Flows

1.	Investor Dashboard
   
a.	View Orders Page.

b.	Approve Orders Page.

c.	View Profile Form.

2.	Vendor Dashboard
   
a.	Enter Orders Form.

b.	Vendor Dashboard

c.	View Profile form.

Security Measures.

Password hashing using bcrypt.

Protected layout routes on protected interfaces such as dashboards.

CORS configuration.

Session management with expiry.

Input validation.

Rate limiting on API endpoints.

Role checker on restricted backend endpoints.



API Endpoints.
1.	Registry Endpoints.
a.	POST   /reg - Register Users.

2.	Investor Endpoints.
a.	POST /approve_order – Approve Orders.
b.	POST /page – Fetch all orders.
c.	POST /fetch_approved – Fetch all approved orders.
d.	POST /pending – Fetch all pending orders.

3.	Vendor Endpoints
a.	POST /create_order – Create Orders.
b.	POST /create_item – Create item (Cross referencing with external vendors).

4.	Security Endpoints.
a.	GET /view_audits – Fetch all audit logs.
b.	GET /status – View status state of user.
c.	DELETE /delete_session – Delete session of user.

5.	Additional Enpoints.
a.	GET /fetch_roles – Role checker for all endpoints except public ones.

6.	Public Endpoints.
a.	POST /new/login – Login of all users.

Models.
User Model Schema

user_id:{ type:Number,
        unique:true,
        required:true,
        maxlength:10 }
    full_name:{
        type:String,
        required:true,
        maxlength:255
    }
    email:{
        type:String,
        required:true,
        unique:true,
        maxlength:255
    }
    password:{
        type:String,
        maxlength:255,
        required:true
    }
    role:{
        type:String,
        required:true,
        enum:Object.values(roles)
    }
Order Model

order_id:{
        type:Number,
        unique:true,
        required:true,
        min:0
    }
    item_id:{
        type:Number,
        required:true,
        minlength:0
    }
    amount:{
        type:Number,
        required:true,
        min:1
    }
    approval:{
        type:Boolean,
        required:true,
        default:false
    }
    time:{
        type:String,
        requried:true
    }

Items Model

item_id:{
        type:Number,
        unique:true,
        required:true,
        min:100
    },
    item_name:{
        type:String,
        required:true,
        unique:true,
        maxlength:255
    }

Audits Model

user_id:{
        type:Number,
        required:true,
        maxlength:20
    },
    full_name:{
        type:String,
        required:true,
        maxlength:255
    },
    action:{
        type:String,
        requried:true,
        maxlength:10
    },
    time:{
        type:String,
        required:true,
        maxlength:255
    },
    description:{
        type:String,
        required:true,
        maxlength:50
    }

Error Handling.

Error Codes.

409 : Conflict in data entry.

404 : Data or URL Route not Found

400 : Missing data that is required

Success Codes.

200 : Request executed successfully.

201 : Object created and recorded to database successfully.

