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
exports.ContaPagarDAO = void 0;
const postgreSQL_1 = require("../../Providers/Storages/pg/postgreSQL");
const DAO_1 = require("../DAO/DAO");
class ContaPagarDAO extends DAO_1.DAO {
    update(ContaAPagar) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield postgreSQL_1.postgreSQL.query("UPDATE " + ContaPagarDAO.table
                    + " SET juros = '" + ContaAPagar.juros
                    + "', multa = '" + ContaAPagar.multa
                    + "', desconto ='" + ContaAPagar.desconto
                    + "', saldo ='" + ContaAPagar.saldo
                    + "', pagamento = '" + ContaAPagar.pagamento
                    + "', recebimento = '" + ContaAPagar.recebimento
                    + "' WHERE id_conta = '" + ContaAPagar.id_conta
                    + "'");
            }
            catch (err) {
                return (new ContaPagarDAO().errors(err));
            }
        });
    }
    ;
    insert(Titulo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield postgreSQL_1.postgreSQL.query('INSERT INTO ' + ContaPagarDAO.table + '(fk_filial, tipo, fk_user, parcela, valor, multa, juros, desconto, emissao, vencimento, saldo, recebimento, observacao, fk_beneficiario, fk_despesa) VALUES ('
                    + "'"
                    + Titulo.fk_filial + "','"
                    + Titulo.tipo + "','"
                    // + Titulo.fkVenda + "','"
                    + Titulo.fk_user + "','"
                    + Titulo.parcela + "','"
                    + Titulo.valor + "','"
                    + Titulo.multa + "','"
                    + Titulo.juros + "','"
                    + Titulo.desconto + "','"
                    + Titulo.emissao + "','"
                    + Titulo.vencimento + "','"
                    + Titulo.saldo + "','"
                    + Titulo.recebimento + "','"
                    + Titulo.observacao + "','"
                    + Titulo.fk_beneficiario + "','"
                    + Titulo.fk_despesa
                    + "')");
                return "Título gerado com sucesso.";
            }
            catch (err) {
                return (new ContaPagarDAO().errors(err));
            }
        });
    }
    ;
}
exports.ContaPagarDAO = ContaPagarDAO;
ContaPagarDAO.table = 'contas_pagar';
