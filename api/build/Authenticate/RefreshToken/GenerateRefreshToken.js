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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateRefreshToken = void 0;
const postgreSQL_1 = require("../../Providers/Storages/pg/postgreSQL");
const dayjs_1 = __importDefault(require("dayjs"));
const uuid_1 = require("uuid");
class GenerateRefreshToken {
    insert(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const uuid_token = (0, uuid_1.v4)();
                const expiresIn = (0, dayjs_1.default)().add(15, "second").unix();
                yield postgreSQL_1.postgreSQL.query('INSERT INTO refresh_token(expires_in, user_, user_id) VALUES (' + "'" + expiresIn + "', '" + userId + "', '" + uuid_token + "');");
                const generateRefreshToken = yield postgreSQL_1.postgreSQL.query("SELECT *FROM refresh_token ORDER BY id DESC LIMIT 1");
                return generateRefreshToken.rows[0];
            }
            catch (err) {
                console.log("Error Occurred !" + err);
            }
        });
    }
    ;
}
exports.GenerateRefreshToken = GenerateRefreshToken;
