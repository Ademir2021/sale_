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
exports.ContasPagarControllers = void 0;
const DAO_1 = require("../../Entities/DAO/DAO");
const ContaPagar_1 = require("../../Entities/ContaPagar/ContaPagar");
const ContasAPagarServices_1 = require("../../Services/ContasAPagar/ContasAPagarServices");
class ContasPagarControllers extends DAO_1.DAO {
    saveContasPagar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = request.body;
            const contaAPagar = new ContaPagar_1.ContasPagar(resp.id_conta, resp.fk_filial, resp.tipo, resp.fk_compra, resp.fk_user, resp.parcela, resp.valor, resp.multa, resp.juros, resp.desconto, resp.emissao, resp.vencimento, resp.saldo, resp.pagamento, resp.recebimento, resp.observacao, resp.fk_beneficiario, resp.fk_despesa);
            const insertConta = yield new ContasAPagarServices_1.ContasAPagarServices().insert(contaAPagar);
            response.json(insertConta);
        });
    }
    ;
    updateContasPagar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = request.body;
            const constaAPagar = new ContaPagar_1.ContasPagar(resp.id_conta, resp.fk_filial, resp.tipo, resp.fk_compra, resp.fk_user, resp.parcela, resp.valor, resp.multa, resp.juros, resp.desconto, resp.emissao, resp.vencimento, resp.saldo, resp.pagamento, resp.recebimento, resp.observacao, resp.fk_beneficiario, resp.fk_despesa);
            const updateConta = yield new ContasAPagarServices_1.ContasAPagarServices().update(constaAPagar);
            return response.json(updateConta);
        });
    }
    ;
    findAllContasPagarList(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, privilege } = request.body[0];
            const listConta = yield new ContasAPagarServices_1.ContasAPagarServices().listContasAPagarByLoggedInUser(id, privilege);
            response.json(listConta);
        });
    }
    ;
}
exports.ContasPagarControllers = ContasPagarControllers;
