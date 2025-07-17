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
exports.UserDAO = void 0;
const postgreSQL_1 = require("../../Providers/Storages/pg/postgreSQL");
const DAO_1 = require("../DAO/DAO");
class UserDAO extends DAO_1.DAO {
    insertUser(User) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = `
                INSERT INTO ${UserDAO.table} (name, username, password)
                VALUES ($1, $2, $3)
            `;
                const values = [User.name, User.username, User.password];
                yield postgreSQL_1.postgreSQL.query(query, values);
            }
            catch (err) {
                return new UserDAO().errors(err);
            }
        });
    }
    updateUser(User) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = `
                UPDATE ${UserDAO.table}
                SET 
                    updated_at = now(),
                    name = $1,
                    username = $2,
                    password = $3
                WHERE id = $4
            `;
                const values = [User.name, User.username, User.password, User.id];
                yield postgreSQL_1.postgreSQL.query(query, values);
            }
            catch (err) {
                return new UserDAO().errors(err);
            }
        });
    }
    selectUsername(User) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = `
                SELECT id, name, username, password, privilege
                FROM ${UserDAO.table}
                WHERE username = $1
            `;
                const values = [User.username];
                const res = yield postgreSQL_1.postgreSQL.query(query, values);
                return res.rows;
            }
            catch (err) {
                return new UserDAO().errors(err);
            }
        });
    }
    userRecoverPass(User) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = `
                SELECT username
                FROM ${UserDAO.table}
                WHERE username = $1
            `;
                const values = [User.username];
                const res = yield postgreSQL_1.postgreSQL.query(query, values);
                return res.rows;
            }
            catch (err) {
                return new UserDAO().errors(err);
            }
        });
    }
    recoverUpdateUser(User) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = `
                UPDATE ${UserDAO.table}
                SET 
                    updated_at = now(),
                    password = $1
                WHERE username = $2
            `;
                const values = [User.password, User.username];
                yield postgreSQL_1.postgreSQL.query(query, values);
            }
            catch (err) {
                return new UserDAO().errors(err);
            }
        });
    }
}
exports.UserDAO = UserDAO;
UserDAO.table = "users";
