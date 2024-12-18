import { Contorller } from "../abstract/Contorller";
import { Request, response, Response } from "express";
import { UserService } from "../Service/UserService";
import { resp } from "../utils/resp";
import { DBResp } from "../interfaces/DBResp";
import { Student } from "../interfaces/Student";
require('dotenv').config()

export class UserController extends Contorller {
    protected service: UserService;

    constructor() {
        super();
        this.service = new UserService();
    }

    public async findAll(Request: Request, Response: Response) {

        const res: resp<Array<DBResp<Student>> | undefined> = {
            code: 200,
            message: "",
            body: undefined
        }

        const dbResp = await this.service.getAllStudents();
        if (dbResp) {
            res.body = dbResp;
            res.message = "find sucess";
            Response.send(res);
        } else {
            res.code = 500;
            res.message = "server error";
            Response.status(500).send(res);
        }

    }

    public async insertOne(Request: Request, Response: Response) {
        const resp = await this.service.insertOne(Request.body)
        Response.status(resp.code).send(resp)
    }

    public async deleteOne(Request: Request, Response: Response) {
        const { userName } = Request.params;
        const resp = await this.service.deleteOne(userName);
        Response.status(resp.code).send(resp);
    }

    public async updateOne(Request: Request, Response: Response) {
        const { userName } = Request.params;
    
        // 檢查路由參數
        console.log(`Received userName: ${userName}`); 
    
        const updateData = Request.body;
        const resp = await this.service.updateOne(userName, updateData);
        Response.status(resp.code).send(resp);
    }
    

}