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
exports.ContasReceberControllers = void 0;
const ContaReceber_1 = require("../../Entities/ContaReceber/ContaReceber");
const ContasAReceberService_1 = require("../../Services/ContasAReceber/ContasAReceberService");
class ContasReceberControllers {
    saveContasReceber(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = request.body;
            const contaReceber = new ContaReceber_1.ContaReceber(resp.id_conta, resp.fk_filial, resp.tipo, resp.fk_venda, resp.fk_user, resp.parcela, resp.valor, resp.multa, resp.juros, resp.desconto, resp.emissao, resp.vencimento, resp.saldo, resp.pagamento, resp.recebimento, resp.observacao, resp.fk_pagador);
            const insertConta = yield new ContasAReceberService_1.ContasAReceberServices().insert(contaReceber);
            return response.json(insertConta);
        });
    }
    ;
    updateContasReceber(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = request.body;
            const contaReceber = new ContaReceber_1.ContaReceber(resp.id_conta, resp.fk_filial, resp.tipo, resp.fk_venda, resp.fk_user, resp.parcela, resp.valor, resp.multa, resp.juros, resp.desconto, resp.emissao, resp.vencimento, resp.saldo, resp.pagamento, resp.recebimento, resp.observacao, resp.fk_pagador);
            const updateConta = yield new ContasAReceberService_1.ContasAReceberServices().update(contaReceber);
            return response.json(updateConta);
        });
    }
    ;
    findAllContasReceberlist(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, privilege } = request.body[0];
            const listConta = yield new ContasAReceberService_1.ContasAReceberServices().listContasAReceberByLoggedInUser(id, privilege);
            response.json(listConta);
        });
    }
    ;
}
exports.ContasReceberControllers = ContasReceberControllers;
