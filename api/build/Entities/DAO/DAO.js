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
exports.DAO = void 0;
const postgreSQL_1 = require("../../Providers/Storages/pg/postgreSQL");
class DAO {
    constructor() {
        this.id = 0;
        this.name = "";
    }
    errors(err) {
        return "Error occurred ! " + err;
    }
    ;
    select(table, filed) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield postgreSQL_1.postgreSQL.query("SELECT * FROM " + table + " ORDER BY " + filed + "");
                return res.rows;
            }
            catch (err) {
                return (this.errors(err));
            }
        });
    }
    ;
    selectLimit(table, filed) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield postgreSQL_1.postgreSQL.query("SELECT * FROM " + table + " ORDER BY " + filed + " DESC LIMIT 8");
                return res.rows;
            }
            catch (err) {
                return (this.errors(err));
            }
        });
    }
    ;
    selectOne(table, id, field) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield postgreSQL_1.postgreSQL.query("SELECT * FROM " + table + " WHERE " + field + " = " + id + "");
                if (res.rowCount !== 0) {
                    return res.rows;
                }
                else {
                    return "ID:" + id + ", não localizado";
                }
            }
            catch (err) {
                return (this.errors(err));
            }
        });
    }
    ;
    selectHandle(table, field1, field2) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield postgreSQL_1.postgreSQL.query("SELECT * FROM " + table + " WHERE " + field1 + " = '" + field2 + "'");
                return (res.rows);
            }
            catch (err) {
                return (this.errors(err));
            }
        });
    }
    ;
    delete(table, id, id_) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield postgreSQL_1.postgreSQL.query("DELETE FROM " + table + " WHERE " + id + " = " + id_ + "");
                if (res.rowCount !== 0) {
                    return "ID:" + res.rowCount + ", deletado com sucesso";
                }
                else {
                    return "ID:" + id + ", não localizado";
                }
            }
            catch (err) {
                return (this.errors(err));
            }
        });
    }
    ;
}
exports.DAO = DAO;
