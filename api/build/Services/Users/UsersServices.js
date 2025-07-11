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
exports.UsersServices = void 0;
const UserDAO_1 = require("../../Entities/User/UserDAO");
const UsersDTO_1 = require("../../Dtos/Users/UsersDTO");
const nodeMailer_1 = require("../../Providers/Mail/nodeMailer");
class UsersServices {
    saveUser(User) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield new UsersDTO_1.UsersDTO().saveUser(User);
            return resp;
        });
    }
    ;
    updateUser(User) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield new UsersDTO_1.UsersDTO().updateUser(User);
            return resp;
        });
    }
    ;
    listUsersByLoggedInUser(id, privilege) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield new UsersDTO_1.UsersDTO().listUsersByLoggedInUser(id, privilege);
            return resp;
        });
    }
    ;
    listUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield new UsersDTO_1.UsersDTO().listUser(id);
        });
    }
    ;
    loginUser(User) {
        return __awaiter(this, void 0, void 0, function* () {
            const userLogin = yield new UserDAO_1.UserDAO().selectUsername(User);
            return (userLogin);
        });
    }
    ;
    userRecoverPass(User) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield new UsersDTO_1.UsersDTO().userRecoverPass(User);
            const res = yield new UserDAO_1.UserDAO().recoverUpdateUSer(User);
            const handleService = new nodeMailer_1.HandleService();
            handleService.setSendMailRecoverUserPass(User.username, User.hash);
            return resp;
        });
    }
    ;
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield new UsersDTO_1.UsersDTO().deleteUser(id);
            return resp;
        });
    }
}
exports.UsersServices = UsersServices;
