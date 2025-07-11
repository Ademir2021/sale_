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
exports.ValPagoDAO = void 0;
const postgreSQL_1 = require("../../Providers/Storages/pg/postgreSQL");
const DAO_1 = require("../DAO/DAO");
class ValPagoDAO extends DAO_1.DAO {
    insert(Vals) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield postgreSQL_1.postgreSQL.query('INSERT INTO ' + ValPagoDAO.table + '(fk_conta, fk_compra, fk_user, valor, data_recebimento, descricao, fk_person, fk_despesa) VALUES ('
                    + "'" + Vals.fk_conta
                    + "','" + Vals.fk_compra
                    + "', '" + Vals.fk_user
                    + "', '" + Vals.valor
                    + "', '" + Vals.data_recebimento
                    + "', '" + Vals.descricao
                    + "', '" + Vals.fk_person
                    + "', '" + Vals.fk_despesa
                    + "')");
            }
            catch (err) {
                return (new ValPagoDAO().errors(err));
            }
        });
    }
    ;
}
exports.ValPagoDAO = ValPagoDAO;
ValPagoDAO.table = 'vals_pagos';
