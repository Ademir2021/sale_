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
exports.ContasAPagarDTO = void 0;
const ContaPagarDAO_1 = require("../../Entities/ContaPagar/ContaPagarDAO");
const table = ContaPagarDAO_1.ContaPagarDAO.table;
class ContasAPagarDTO {
    findContasAPagarByLoggedInUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const contas = yield new ContaPagarDAO_1.ContaPagarDAO().selectOne(table, id, "fk_user");
            return (contas);
        });
    }
    ;
    findContasAPagarAdmin() {
        return __awaiter(this, void 0, void 0, function* () {
            const contas = yield new ContaPagarDAO_1.ContaPagarDAO().select(table, "vencimento");
            return (contas);
        });
    }
    ;
    insert(contaPagar) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = new ContaPagarDAO_1.ContaPagarDAO().insert(contaPagar);
            return res;
        });
    }
    ;
    update(contaPagar) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = new ContaPagarDAO_1.ContaPagarDAO().update(contaPagar);
            return res;
        });
    }
    ;
    listContasAPagarByLoggedInUser(id, privilege) {
        return __awaiter(this, void 0, void 0, function* () {
            if (privilege == 2) {
                const contas = yield this.findContasAPagarAdmin();
                return contas;
            }
            else {
                const contas = yield this.findContasAPagarByLoggedInUser(id);
                return contas;
            }
        });
    }
    ;
}
exports.ContasAPagarDTO = ContasAPagarDTO;
