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
exports.NotaRecebidaControllers = void 0;
const NotaRecebida_1 = require("../../Entities/NotaRecebida/NotaRecebida");
const NotaRecebidaDAO_1 = require("../../Entities/NotaRecebida/NotaRecebidaDAO");
class NotaRecebidaControllers {
    registerNotaRecebida(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = request.body;
            const notaRecebida = new NotaRecebida_1.NotaRecebida(resp.fk_fornecedor, resp.data, resp.emissao, resp.numNota, resp.modelo, resp.vFrete, resp.vSeguro, resp.despAcessorias, resp.encargos, resp.acrescimo, resp.desconto, resp.tProdutos, resp.total, resp.items, resp.contaAPagar, resp.valsPago);
            const notaRecebidaRegister = yield new NotaRecebidaDAO_1.NotaRecebidaDAO().insert(notaRecebida);
            return response.json(notaRecebidaRegister);
        });
    }
    ;
}
exports.NotaRecebidaControllers = NotaRecebidaControllers;
