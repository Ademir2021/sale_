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
exports.UsersDTO = void 0;
const UserDAO_1 = require("../../Entities/User/UserDAO");
const table = UserDAO_1.UserDAO.table;
const msgAlreadyExists = { msg: 'Email já existe' };
const msgRecordSucess = { msg: 'Usuário cadastrado com sucesso' };
const msgUserNotFound = { msg: 'User não Localizado' };
const msgUserUpdatedSuccessfully = { msg: 'Usuário Atualizado com Sucesso' };
class UsersDTO {
    findUser(User) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield new UserDAO_1.UserDAO().selectOne(table, User.id, 'id');
            return user;
        });
    }
    ;
    findUserName(User) {
        return __awaiter(this, void 0, void 0, function* () {
            const userName = yield new UserDAO_1.UserDAO().selectUsername(User);
            return userName;
        });
    }
    ;
    saveUser(User) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.findUserName(User);
            if (user[0]) {
                return ([msgAlreadyExists]);
            }
            else {
                yield new UserDAO_1.UserDAO().insertUser(User);
                return ([msgRecordSucess]);
            }
        });
    }
    ;
    updateUser(User) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.findUser(User);
            if (user[0].id === User.id) {
                const user = yield new UserDAO_1.UserDAO().updateUser(User);
                return (msgUserUpdatedSuccessfully);
            }
            else {
                return (msgUserNotFound);
            }
        });
    }
    ;
    listUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield new UserDAO_1.UserDAO().selectOne(table, id, 'id');
            return resp;
        });
    }
    ;
    listUsersByLoggedInUser(id, privilege) {
        return __awaiter(this, void 0, void 0, function* () {
            if (privilege == 2) {
                const users = yield new UserDAO_1.UserDAO().select(table, 'id');
                return (users);
            }
            else {
                const users = yield new UserDAO_1.UserDAO().selectOne(table, id, 'id');
                return (users);
            }
        });
    }
    ;
    userRecoverPass(User) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield new UserDAO_1.UserDAO().userRecoverPass(User);
            if (resp[0]) {
                return resp;
            }
            else {
                return ([msgUserNotFound]);
            }
        });
    }
    ;
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield new UserDAO_1.UserDAO().delete(table, id, 'id');
            return resp;
        });
    }
    ;
}
exports.UsersDTO = UsersDTO;
