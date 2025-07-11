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
exports.UserControllers = void 0;
const User_1 = require("../../Entities/User/User");
const UsersServices_1 = require("../../Services/Users/UsersServices");
class UserControllers {
    saveUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name, username, password, privilege } = request.body;
            const user = new User_1.User(id, name, username, password, privilege);
            const resp = yield new UsersServices_1.UsersServices().saveUser(user);
            response.json(resp);
        });
    }
    ;
    updateUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name, username, password, privilege } = request.body;
            const user = new User_1.User(id, name, username, password, privilege);
            const resp = yield new UsersServices_1.UsersServices().updateUser(user);
            response.json([resp, user]);
        });
    }
    ;
    listUsers(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, privilege } = request.body[0];
            const resp = yield new UsersServices_1.UsersServices().listUsersByLoggedInUser(id, privilege);
            response.json(resp);
        });
    }
    ;
    listUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.body;
            const resp = yield new UsersServices_1.UsersServices().listUser(id);
            response.json(resp);
        });
    }
    ;
    userLogin(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name, username, password, privilege } = request.body;
            const user = new User_1.User(id, name, username, password, privilege);
            const userLogin = yield new UsersServices_1.UsersServices().loginUser(user);
            response.json(userLogin);
        });
    }
    ;
    userRecoverPass(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRecover = request.body;
            const resp = yield new UsersServices_1.UsersServices().userRecoverPass(userRecover);
            response.json(resp);
        });
    }
    ;
    deleteUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.body;
            const resp = yield new UsersServices_1.UsersServices().deleteUser(id);
            response.json(resp);
        });
    }
    ;
}
exports.UserControllers = UserControllers;
