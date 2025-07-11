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
exports.CaixaMovsControllers = void 0;
const CaixaMovDAO_1 = require("../../Entities/CaixaMov/CaixaMovDAO");
const table = CaixaMovDAO_1.CaixaMovDAO.table;
class CaixaMovsControllers {
    listCaixaMovs(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield new CaixaMovDAO_1.CaixaMovDAO().select(table, 'id_caixa');
            response.json(product);
        });
    }
    ;
}
exports.CaixaMovsControllers = CaixaMovsControllers;
