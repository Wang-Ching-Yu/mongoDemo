"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const Contorller_1 = require("../abstract/Contorller");
const UserService_1 = require("../Service/UserService");
const log_1 = require("../middlewares/log");

require('dotenv').config();
class UserController extends Contorller_1.Contorller {
    constructor() {
        super();
        this.service = new UserService_1.UserService();
    }
    findAll(Request, Response) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = {
                code: 200,
                message: "",
                body: undefined
            };
            const dbResp = yield this.service.getAllStudents();
            if (dbResp) {
                res.body = dbResp;
                res.message = "find sucess";
                Response.send(res);
            }
            else {
                res.code = 500;
                res.message = "server error";
                Response.status(500).send(res);
            }
        });
    }
    insertOne(Request, Response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield this.service.insertOne(Request.body);
            Response.status(resp.code).send(resp);
        });
    }
}
exports.UserController = UserController;
