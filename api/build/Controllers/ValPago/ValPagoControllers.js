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
exports.ValPagoControllers = void 0;
const DAO_1 = require("../../Entities/DAO/DAO");
const ValPago_1 = require("../../Entities/ValPago/ValPago");
const ValsPagosDTO_1 = require("../../Dtos/ValsPagos/ValsPagosDTO");
const ValsPagos_1 = require("../../Services/ValsPagos/ValsPagos");
class ValPagoControllers extends DAO_1.DAO {
    registerValPago(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = request.body;
            const valPago = new ValPago_1.ValPago(resp.id_val, resp.fk_conta, resp.fk_compra, resp.fk_user, resp.valor, resp.data_recebimento, resp.descricao, resp.fk_person, resp.fk_despesa);
            const res = yield new ValsPagos_1.ValsPagosService().registerValsPagos(valPago);
            return response.json(res);
        });
    }
    ;
    findAllList(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, privilege } = request.body[0];
            const vals = yield new ValsPagosDTO_1.ValsPagosDTO().listValsPagosByLoggedInUser(id, privilege);
            response.json(vals);
        });
    }
    ;
}
exports.ValPagoControllers = ValPagoControllers;
