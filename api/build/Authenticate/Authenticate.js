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
exports.AuthenticateJwt = void 0;
const postgreSQL_1 = require("../Providers/Storages/pg/postgreSQL");
const bcrypt_1 = require("bcrypt");
const GenerateRefreshToken_1 = require("./RefreshToken/GenerateRefreshToken");
const GenerateTokenProvider_1 = require("./RefreshToken/GenerateTokenProvider");
class AuthenticateJwt {
    handleJwt(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, password } = request.body;
                const userAlreadExists = yield postgreSQL_1.postgreSQL.query("SELECT id, username, password FROM users WHERE username = '" + username + "' LIMIT(1)");
                const passwordMatch = yield (0, bcrypt_1.compare)(password, userAlreadExists.rows[0].password);
                if (!passwordMatch) {
                    response.json("Nome de Usuário ou senha inválido(a)");
                }
                else {
                    let str_id = userAlreadExists.rows[0].id.toString();
                    /**Gera token do Usuário */
                    const generateTokenProvider = new GenerateTokenProvider_1.GenerateTokenProvider();
                    const token = yield generateTokenProvider.handleExecute(str_id);
                    /**Apaga token do usuario */
                    const user_ = userAlreadExists.rows[0].id;
                    yield postgreSQL_1.postgreSQL.query("DELETE FROM refresh_token WHERE user_ = '" + user_ + "'");
                    /**Gera refresh_token no banco */
                    const generateRefreshToken = new GenerateRefreshToken_1.GenerateRefreshToken();
                    const refreshToken = yield generateRefreshToken.insert(userAlreadExists.rows[0].id);
                    response.json({ token, refreshToken });
                    // return {token, refreshToken}
                }
            }
            catch (err) {
                // console.log("Error Ocorred !!: " + err)
                response.json("Usuário ou senha inválido");
            }
        });
    }
}
exports.AuthenticateJwt = AuthenticateJwt;
