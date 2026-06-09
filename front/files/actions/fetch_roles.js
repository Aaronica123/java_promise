import { roles } from "../models.js";

export function fetch_roles(req,res){
    res.status(200).json({"message":"Roles fetched",
        roles
    });
    return roles;
}