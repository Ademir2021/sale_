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
exports.RefreshTokenUser = void 0;
const postgreSQL_1 = require("../../Providers/Storages/pg/postgreSQL");
const GenerateTokenProvider_1 = require("../RefreshToken/GenerateTokenProvider");
const dayjs_1 = __importDefault(require("dayjs"));
class RefreshTokenUser {
    handleRefreshToken(refresh_token) {
        return __awaiter(this, void 0, void 0, function* () {
            const user_id = refresh_token;
            try {
                const res_refresh_token = yield postgreSQL_1.postgreSQL.query("SELECT expires_in, user_, user_id FROM refresh_token WHERE user_id = '" + user_id + "' LIMIT(1)");
                /**Verifica se o token expirou */
                const refreshTokenExpired = (0, dayjs_1.default)().isAfter(dayjs_1.default.unix(res_refresh_token.rows[0].expires_in));
                const generateTokenProvider = new GenerateTokenProvider_1.GenerateTokenProvider();
                const token = yield generateTokenProvider.handleExecute(res_refresh_token.rows[0].user_id);
                if (refreshTokenExpired) {
                    // Apaga tokens invalidos
                    const user_ = res_refresh_token.rows[0].user_;
                    yield postgreSQL_1.postgreSQL.query("DELETE FROM refresh_token WHERE user_ = '" + user_ + "'");
                    //Gera token novamente
                    const generateTokenProvider = new GenerateTokenProvider_1.GenerateTokenProvider();
                    const newRefreshToken = yield generateTokenProvider.handleExecute(res_refresh_token.rows[0].user_id);
                    return { token, newRefreshToken };
                }
                return { token };
            }
            catch (err) {
                console.log("Error Occurred !!" + err);
                return "Refresh_token invalido";
            }
        });
    }
}
exports.RefreshTokenUser = RefreshTokenUser;
