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
exports.GenerateTokenProvider = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
class GenerateTokenProvider {
    handleExecute(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = (0, jsonwebtoken_1.sign)({}, "0103adcc-3d80-45f6-a2b3-9425aeff7ce7", {
                subject: userId,
                expiresIn: "99s"
            });
            return token;
        });
    }
}
exports.GenerateTokenProvider = GenerateTokenProvider;
