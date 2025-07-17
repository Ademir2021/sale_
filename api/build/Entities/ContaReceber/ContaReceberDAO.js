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
exports.ContaReceberDAO = void 0;
const DAO_1 = require("../DAO/DAO");
const postgreSQL_1 = require("../../Providers/Storages/pg/postgreSQL");
class ContaReceberDAO extends DAO_1.DAO {
    insert(Titulo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = `
                INSERT INTO ${ContaReceberDAO.table} 
                (fk_filial, tipo, fk_user, parcela, valor, multa, juros, desconto, emissao, vencimento, saldo, recebimento, observacao, fk_pagador) 
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
            `;
                const values = [
                    Titulo.fk_filial,
                    Titulo.tipo,
                    Titulo.fk_user,
                    Titulo.parcela,
                    Titulo.valor,
                    Titulo.multa,
                    Titulo.juros,
                    Titulo.desconto,
                    Titulo.emissao,
                    Titulo.vencimento,
                    Titulo.saldo,
                    Titulo.recebimento,
                    Titulo.observacao,
                    Titulo.fk_pagador
                ];
                yield postgreSQL_1.postgreSQL.query(query, values);
                return "Título gerado com sucesso.";
            }
            catch (err) {
                return new ContaReceberDAO().errors(err);
            }
        });
    }
    update(ContaRec) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = `
                UPDATE ${ContaReceberDAO.table}
                SET juros = $1,
                    multa = $2,
                    desconto = $3,
                    saldo = $4,
                    pagamento = $5,
                    recebimento = $6
                WHERE id_conta = $7
            `;
                const values = [
                    ContaRec.juros,
                    ContaRec.multa,
                    ContaRec.desconto,
                    ContaRec.saldo,
                    ContaRec.pagamento,
                    ContaRec.recebimento,
                    ContaRec.id_conta
                ];
                yield postgreSQL_1.postgreSQL.query(query, values);
            }
            catch (err) {
                return new ContaReceberDAO().errors(err);
            }
        });
    }
}
exports.ContaReceberDAO = ContaReceberDAO;
ContaReceberDAO.table = 'contas_receber';
