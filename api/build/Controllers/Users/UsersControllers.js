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
exports.UsersControllers = void 0;
const User_1 = require("../../Entities/User/User");
const UsersDTO_1 = require("../../Dtos/Users/UsersDTO");
const UsersServices_1 = require("../../Services/Users/UsersServices");
const UserDAO_1 = require("../../Entities/User/UserDAO");
const table = UserDAO_1.UserDAO.table;
class UsersControllers {
    saveUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name, username, password, privilege } = request.body;
            const user = new User_1.User(id, name, username, password, privilege);
            const userDTOSave = yield new UsersDTO_1.UsersDTO().saveUser(user);
            response.json(userDTOSave);
        });
    }
    ;
    listUsers(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, privilege } = request.body[0];
            const usersDTOList = yield new UsersDTO_1.UsersDTO().listUsersByLoggedInUser(id, privilege);
            response.json(usersDTOList);
        });
    }
    ;
    listUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.body;
            const listUser = yield new UserDAO_1.UserDAO().selectOne(table, id, 'id');
            response.json(listUser);
        });
    }
    ;
    updateUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name, username, password, privilege } = request.body;
            const user = new User_1.User(id, name, username, password, privilege);
            const userDTOUpdate = yield new UsersDTO_1.UsersDTO().updateUser(user);
            response.json([userDTOUpdate, user]);
        });
    }
    ;
    deleteUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.body;
            const deleteUser = yield new UserDAO_1.UserDAO().delete(table, id, 'id');
            response.json(deleteUser);
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
}
exports.UsersControllers = UsersControllers;
