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
exports.NoteDAO = void 0;
const postgreSQL_1 = require("../../Providers/Storages/pg/postgreSQL");
const DAO_1 = require("../DAO/DAO");
class NoteDAO extends DAO_1.DAO {
    getNote(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield postgreSQL_1.postgreSQL.query("SELECT * FROM nota WHERE nota = $1", [id]);
            return res.rows[0];
        });
    }
    getItemsNote(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield postgreSQL_1.postgreSQL.query("SELECT  *FROM itens_nota WHERE id_venda = $1 ", [id]);
            return res.rows;
        });
    }
    getInvoices(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield postgreSQL_1.postgreSQL.query("SELECT * FROM contas_receber WHERE fk_venda = $1 ORDER BY vencimento", [id]);
            return res.rows;
        });
    }
    getMoney(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield postgreSQL_1.postgreSQL.query("SELECT valor FROM vals_recebidos WHERE fk_venda = $1 AND fk_conta = 0", [id]);
            return res.rows[0];
        });
    }
}
exports.NoteDAO = NoteDAO;
