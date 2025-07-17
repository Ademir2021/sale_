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
        return `Error occurred: ${err}`;
    }
    isValidIdentifier(value) {
        return /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(value);
    }
    select(table, field) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isValidIdentifier(table) || !this.isValidIdentifier(field)) {
                return this.errors("Invalid table or field name");
            }
            try {
                const query = `SELECT * FROM ${table} ORDER BY ${field}`;
                const res = yield postgreSQL_1.postgreSQL.query(query);
                return res.rows;
            }
            catch (err) {
                return this.errors(err);
            }
        });
    }
    selectLimit(table_1, field_1) {
        return __awaiter(this, arguments, void 0, function* (table, field, limit = 8) {
            if (!this.isValidIdentifier(table) || !this.isValidIdentifier(field)) {
                return this.errors("Invalid table or field name");
            }
            try {
                const query = `SELECT * FROM ${table} ORDER BY ${field} DESC LIMIT $1`;
                const res = yield postgreSQL_1.postgreSQL.query(query, [limit]);
                return res.rows;
            }
            catch (err) {
                return this.errors(err);
            }
        });
    }
    selectOne(table, id, field) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = `SELECT * FROM ${table} WHERE ${field} = $1`;
                const res = yield postgreSQL_1.postgreSQL.query(query, [id]);
                if (res.rowCount !== 0) {
                    return res.rows;
                }
                else {
                    return `ID: ${id} não localizado`;
                }
            }
            catch (err) {
                return this.errors(err);
            }
        });
    }
    selectHandle(table, field, value) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isValidIdentifier(table) || !this.isValidIdentifier(field)) {
                return this.errors("Invalid table or field name");
            }
            try {
                const query = `SELECT * FROM ${table} WHERE ${field} = $1`;
                const res = yield postgreSQL_1.postgreSQL.query(query, [value]);
                return res.rows;
            }
            catch (err) {
                return this.errors(err);
            }
        });
    }
    delete(table, field, id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isValidIdentifier(table) || !this.isValidIdentifier(field)) {
                return this.errors("Invalid table or field name");
            }
            try {
                const query = `DELETE FROM ${table} WHERE ${field} = $1`;
                const res = yield postgreSQL_1.postgreSQL.query(query, [id]);
                return res.rowCount
                    ? `ID: ${id} deletado com sucesso`
                    : `ID: ${id} não localizado`;
            }
            catch (err) {
                return this.errors(err);
            }
        });
    }
}
exports.DAO = DAO;
