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
exports.ValsRecebidosDTO = void 0;
const ValRecebidoDAO_1 = require("../../Entities/ValRecebido/ValRecebidoDAO");
const table = ValRecebidoDAO_1.ValRecebidoDAO.table;
class ValsRecebidosDTO {
    findValsRecebidosByLoggedInUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const vals = yield new ValRecebidoDAO_1.ValRecebidoDAO().selectOne(table, id, "fk_user");
            return (vals);
        });
    }
    ;
    findValsRecebidosAdmin() {
        return __awaiter(this, void 0, void 0, function* () {
            const vals = yield new ValRecebidoDAO_1.ValRecebidoDAO().selectLimit(table, "id_val");
            return (vals);
        });
    }
    ;
    listValsRecebidosByLoggedInUser(id, privilege) {
        return __awaiter(this, void 0, void 0, function* () {
            if (privilege == 2) {
                const vals = yield this.findValsRecebidosAdmin();
                return vals;
            }
            else {
                const vals = yield this.findValsRecebidosByLoggedInUser(id);
                return vals;
            }
        });
    }
    ;
}
exports.ValsRecebidosDTO = ValsRecebidosDTO;
