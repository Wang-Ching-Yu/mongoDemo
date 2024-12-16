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
exports.UserService = void 0;
const Service_1 = require("../abstract/Service");
const studentSchemas_1 = require("../orm/schemas/studentSchemas");
const log_1 = require("../middlewares/log");

class UserService extends Service_1.Service {
    getAllStudents() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield studentSchemas_1.studentsModel.find({});
                return res;
            }
            catch (error) {
                return undefined;
            }
        });
    }
    /**
     * 新增學生
     * @param info 學生資訊
     * @returns resp
     */
    insertOne(info) {
        return __awaiter(this, void 0, void 0, function* () {
            const current = yield this.getAllStudents();
            const resp = {
                code: 200,
                message: "",
                body: undefined
            };
            if (current && current.length > 0) {
                try {
                    const nameValidator = yield this.userNameValidator(info.userName);
                    if (current.length >= 200) {
                        resp.message = "student list is full";
                        resp.code = 403;
                    }
                    else {
                        if (nameValidator === "驗證通過") {
                            info.sid = String(current.length + 1);
                            info._id = undefined;
                            const res = new studentSchemas_1.studentsModel(info);
                            resp.body = yield res.save();
                        }
                        else {
                            resp.code = 403;
                            resp.message = nameValidator;
                        }
                    }
                }
                catch (error) {
                    resp.message = "server error";
                    resp.code = 500;
                    log_1.logger.info(`驗證錯誤 @${current.body}`);
                }
            }
            else {
                resp.message = "server error";
                resp.code = 500;
                log_1.logger.info(`資料錯誤 @${current.body}`);
            }
            return resp;
        });
    }
    /**
     * 學生名字驗證器
     * @param userName 學生名字
     * tku ee 0787
     * ee 科系縮寫
     *  0787 四碼
     * 座號檢查，跟之前有重複就噴錯  只能寫沒重複的號碼
     */
    userNameValidator(userName) {
        return __awaiter(this, void 0, void 0, function* () {
            if (userName.length < 7) {
                return ('學生名字格式不正確，應為 tku + 科系縮寫 + 四碼座號，例如: tkubm1760');
            }
            const info = this.userNameFormator(userName);
            if (info.schoolName !== 'tku') {
                return '校名必須為 tku';
            }
            // 驗證座號(正則不想寫可以給 gpt 寫, 記得測試就好)
            const seatNumberPattern = /^\d{4}$/; // 驗證4個數字
            if (!seatNumberPattern.test(info.seatNumber)) {
                return '座號格式不正確，必須為四位數字。';
            }
            if (yield this.existingSeatNumbers(info.seatNumber)) {
                return '座號已存在';
            }
            return '驗證通過';
        });
    }
    /**
     * 用戶名格式化
     * @param userName 用戶名
     * @returns seatInfo
     */
    userNameFormator(userName) {
        const info = {
            schoolName: userName.slice(0, 3),
            department: userName.slice(3, userName.length - 4),
            seatNumber: userName.slice(-4)
        };
        return info;
    }
    /**
     * 檢查用戶名是否存在
     * @param SeatNumber
     * @returns boolean
     */
    existingSeatNumbers(SeatNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            const students = yield this.getAllStudents();
            let exist = false;
            if (students) {
                students.forEach((student) => {
                    const info = this.userNameFormator(student.userName);
                    if (info.seatNumber === SeatNumber) {
                        exist = true;
                    }
                });
            }
            return exist;
        });
    }
}
exports.UserService = UserService;
