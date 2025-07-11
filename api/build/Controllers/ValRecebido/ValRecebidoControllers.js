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
exports.ValRecebidoControllers = void 0;
const DAO_1 = require("../../Entities/DAO/DAO");
const ValRecebido_1 = require("../../Entities/ValRecebido/ValRecebido");
const ValRecebidoDAO_1 = require("../../Entities/ValRecebido/ValRecebidoDAO");
const ValsRecebidosDTO_1 = require("../../Dtos/ValsRecebidos/ValsRecebidosDTO");
class ValRecebidoControllers extends DAO_1.DAO {
    registerValRecebido(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = request.body;
            const valRecebido = new ValRecebido_1.ValRecebido(resp.id_val, resp.fk_conta, resp.fk_venda, resp.fk_user, resp.valor, resp.data_recebimento, resp.descricao, resp.fk_person);
            const registerVal = yield new ValRecebidoDAO_1.ValRecebidoDAO().insert(valRecebido);
            return response.json(registerVal);
        });
    }
    ;
    findAllList(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, privilege } = request.body[0];
            const vals = yield new ValsRecebidosDTO_1.ValsRecebidosDTO().listValsRecebidosByLoggedInUser(id, privilege);
            response.json(vals);
        });
    }
    ;
}
exports.ValRecebidoControllers = ValRecebidoControllers;
