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
exports.NFeControlles = void 0;
const NFe_1 = require("../../Entities/NFe/NFe");
const NFeServices_1 = require("../../Services/NFe/NFeServices");
class NFeControlles {
    findNFe(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = new NFe_1.NFe(1, 1, 1, [], 10.00, 2.00, 8.00);
            const resp = yield new NFeServices_1.NFeServices().findNota(res);
            return response.json(resp);
        });
    }
}
exports.NFeControlles = NFeControlles;
