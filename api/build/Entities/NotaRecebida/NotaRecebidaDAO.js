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
exports.NotaRecebidaDAO = void 0;
const postgreSQL_1 = require("../../Providers/Storages/pg/postgreSQL");
const DAO_1 = require("../DAO/DAO");
class NotaRecebidaDAO extends DAO_1.DAO {
    insert(NotaRecebida) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield postgreSQL_1.postgreSQL.query('INSERT INTO ' + NotaRecebidaDAO.table + '(fk_fornecedor, data_nota, emissao, num_nota, modelo, v_frete, v_seguro, desp_acessorias, acrescimo, desconto, t_produto, total) VALUES ('
                    + "'"
                    + NotaRecebida.fk_fornecedor
                    + "','"
                    + NotaRecebida.data
                    + "','"
                    + NotaRecebida.emissao
                    + "','"
                    + NotaRecebida.numNota
                    + "','"
                    + NotaRecebida.modelo
                    + "','"
                    + NotaRecebida.vFrete
                    + "','"
                    + NotaRecebida.vSeguro
                    + "','"
                    + NotaRecebida.despAcessorias
                    + "','"
                    + NotaRecebida.acrescimo
                    + "','"
                    + NotaRecebida.desconto
                    + "','"
                    + NotaRecebida.tProdutos
                    + "','"
                    + NotaRecebida.total
                    + "')");
                const num_compra_ = yield postgreSQL_1.postgreSQL.query("SELECT MAX(id_nota) FROM " + NotaRecebidaDAO.table + "");
                const num_compra = num_compra_.rows[0].max;
                if (NotaRecebida.items)
                    for (let item of NotaRecebida.items) {
                        yield postgreSQL_1.postgreSQL.query('INSERT INTO ' + NotaRecebidaDAO.tableItensComprados + '(fk_nota, fk_item, quant, v_unit, total) VALUES ('
                            + "'"
                            + num_compra + "','"
                            + item.item + "','"
                            + item.quantidade + "','"
                            + item.unitario + "','"
                            + item.total
                            + "')");
                    }
                ;
                if (NotaRecebida.contaAPagar)
                    for (let conta of NotaRecebida.contaAPagar) {
                        yield postgreSQL_1.postgreSQL.query('INSERT INTO ' + NotaRecebidaDAO.tableContasPagar + '(fk_filial, tipo, fk_compra, fk_user, parcela, valor, multa, juros, desconto, emissao, vencimento, saldo, recebimento, observacao, fk_beneficiario, fk_despesa) VALUES ('
                            + "'"
                            + conta.fk_filial + "','"
                            + conta.tipo + "','"
                            + num_compra + "','"
                            + conta.fk_user + "','"
                            + conta.parcela + "','"
                            + conta.valor + "','"
                            + conta.multa + "','"
                            + conta.juros + "','"
                            + conta.desconto + "','"
                            + conta.emissao + "','"
                            + conta.vencimento + "','"
                            + conta.saldo + "','"
                            + conta.recebimento + "','"
                            + conta.observacao + "','"
                            + conta.fk_beneficiario + "','"
                            + conta.fk_despesa
                            + "')");
                    }
                ;
                if (NotaRecebida.valsPago.length > 0) {
                    for (let NotaRec of NotaRecebida.valsPago) {
                        yield postgreSQL_1.postgreSQL.query('INSERT INTO ' + NotaRecebidaDAO.tableValsPagos + '(fk_conta, fk_compra, fk_user, valor, data_recebimento, descricao, fk_person) VALUES ('
                            + "'" + 0
                            + "','" + num_compra
                            + "','" + NotaRec.fk_user
                            + "','" + NotaRec.valor
                            + "','" + NotaRec.data_recebimento
                            + "','" + NotaRec.descricao
                            + "','" + NotaRec.fk_person
                            + "')");
                    }
                }
                return (num_compra);
            }
            catch (err) {
                return new NotaRecebidaDAO().errors(err);
            }
        });
    }
}
exports.NotaRecebidaDAO = NotaRecebidaDAO;
NotaRecebidaDAO.table = "notas_recebidas";
NotaRecebidaDAO.tableItensComprados = 'itens_comprados';
NotaRecebidaDAO.tableContasPagar = 'contas_pagar';
NotaRecebidaDAO.tableValsPagos = 'vals_pagos';
