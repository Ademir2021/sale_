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
exports.ContasAReceberDTO = void 0;
const ContaReceberDAO_1 = require("../../Entities/ContaReceber/ContaReceberDAO");
const table = ContaReceberDAO_1.ContaReceberDAO.table;
class ContasAReceberDTO {
    findContasAReceberByLoggedInUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const contas = yield new ContaReceberDAO_1.ContaReceberDAO().selectOne(table, id, "fk_user");
            return (contas);
        });
    }
    ;
    findContasAReceberAdmin() {
        return __awaiter(this, void 0, void 0, function* () {
            const contas = yield new ContaReceberDAO_1.ContaReceberDAO().select(table, "vencimento");
            return (contas);
        });
    }
    ;
    insert(contaReceber) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = new ContaReceberDAO_1.ContaReceberDAO().insert(contaReceber);
            return resp;
        });
    }
    ;
    update(contaReceber) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = new ContaReceberDAO_1.ContaReceberDAO().update(contaReceber);
            return resp;
        });
    }
    ;
    listContasAReceberByLoggedInUser(id, privilege) {
        return __awaiter(this, void 0, void 0, function* () {
            if (privilege == 2) {
                const contas = yield this.findContasAReceberAdmin();
                return contas;
            }
            else {
                const contas = yield this.findContasAReceberByLoggedInUser(id);
                return contas;
            }
        });
    }
    ;
}
exports.ContasAReceberDTO = ContasAReceberDTO;
