"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const Route_1 = require("../abstract/Route");
const UserController_1 = require("../controller/UserController");
const log_1 = require("../middlewares/log");

class UserRoute extends Route_1.Route {
    constructor() {
        super();
        this.Contorller = new UserController_1.UserController();
        this.url = '/api/v1/user/';
        this.setRoutes();
    }
    setRoutes() {
        this.router.get(`${this.url}findAll`, (req, res) => {
            this.Contorller.findAll(req, res);
        });
        /**
         * 新增學生
         * request body {
         *  userName: string,
         *  name: string",
         *  department: string,
         *  grade: string,
         *  class: string,
         *  Email: string
         * }
         * @returns resp<Student>
         */
        this.router.post(`${this.url}insertOne`, (req, res) => {
            log_1.logger.info(`收到的請求資料 @${req.body}`);
            this.Contorller.insertOne(req, res);
        });
    }
}
exports.UserRoute = UserRoute;
