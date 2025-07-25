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
exports.SaleDAO = void 0;
const postgreSQL_1 = require("../../Providers/Storages/pg/postgreSQL");
const DAO_1 = require("../DAO/DAO");
class SaleDAO extends DAO_1.DAO {
    insert(sales) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield postgreSQL_1.postgreSQL.query(`INSERT INTO  ${SaleDAO.table}
                ( fk_name_pers, disc_sale, fk_name_filial, fk_name_user, val_rec, total_sale )
                VALUES ($1, $2, $3, $4, $5, $6)`, [
                    sales.fk_person,
                    sales.disc_sale,
                    sales.fk_filial,
                    sales.fk_user,
                    sales.paySale - sales.disc_sale,
                    sales.tNote
                ]);
                const num_sale_ = yield postgreSQL_1.postgreSQL.query(`SELECT MAX(id_sale) FROM ${SaleDAO.table}`);
                const num_sale = num_sale_.rows[0].max;
                if (sales.itens)
                    for (let item of sales.itens) {
                        const sum_total_item = 0;
                        yield postgreSQL_1.postgreSQL.query(`INSERT INTO  ${SaleDAO.tableItens}
                        (fk_sale, fk_product, amount_product, val_product, total_product)
                        VALUES ($1, $2, $3, $4, $5)`, [
                            num_sale,
                            item.item,
                            item.amount,
                            item.valor,
                            sum_total_item
                        ]);
                    }
                ;
                if (sales.contasReceber)
                    for (let conta of sales.contasReceber) {
                        yield postgreSQL_1.postgreSQL.query(`INSERT INTO ${SaleDAO.tableContasReceber} 
                        (fk_filial, tipo, fk_venda, fk_user, parcela,
                        valor, multa, juros, desconto, emissao,
                        vencimento, saldo, recebimento, observacao, fk_pagador)
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10,$11, $12, $13, $14, $15)`, [
                            conta.fk_filial, conta.tipo, num_sale, conta.fk_user, conta.parcela,
                            conta.valor, conta.multa, conta.juros, conta.desconto, conta.emissao,
                            conta.vencimento, conta.saldo, conta.recebimento, conta.observacao, conta.fk_pagador
                        ]);
                    }
                ;
                if (sales.dinheiro > 0) {
                    yield postgreSQL_1.postgreSQL.query(`INSERT INTO  ${SaleDAO.tableValsRecebidos}
                    (fk_conta, fk_venda, fk_user, valor, data_recebimento, descricao, fk_person)
                    VALUES ($1, $2, $3, $4, $5, $6, $7)`, [
                        0, num_sale, sales.fk_user, sales.dinheiro,
                        new Date().toISOString(), "Venda", sales.fk_person
                    ]);
                }
                return (num_sale);
            }
            catch (err) {
                return new SaleDAO().errors(err);
            }
        });
    }
    ;
}
exports.SaleDAO = SaleDAO;
SaleDAO.table = "sales";
SaleDAO.tableItens = "itens_sale";
SaleDAO.tableContasReceber = "contas_receber";
SaleDAO.tableValsRecebidos = "vals_recebidos";
