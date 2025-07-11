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
exports.ValsPagosDTO = void 0;
const ValPagoDAO_1 = require("../../Entities/ValPago/ValPagoDAO");
const table = ValPagoDAO_1.ValPagoDAO.table;
class ValsPagosDTO {
    findValsPagosByLoggedInUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const vals = yield new ValPagoDAO_1.ValPagoDAO().selectOne(table, id, "fk_user");
            return (vals);
        });
    }
    ;
    findValsPagosAdmin() {
        return __awaiter(this, void 0, void 0, function* () {
            const vals = yield new ValPagoDAO_1.ValPagoDAO().select(table, "id_val");
            return (vals);
        });
    }
    ;
    listValsPagosByLoggedInUser(id, privilege) {
        return __awaiter(this, void 0, void 0, function* () {
            if (privilege == 2) {
                const vals = yield this.findValsPagosAdmin();
                return vals;
            }
            else {
                const vals = yield this.findValsPagosByLoggedInUser(id);
                return vals;
            }
        });
    }
    ;
}
exports.ValsPagosDTO = ValsPagosDTO;
