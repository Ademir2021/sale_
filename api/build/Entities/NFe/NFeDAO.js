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
exports.NFeDAO = void 0;
const jsonNFe = require('../../../json/nfe');
const postgreSQL_1 = require("../../Providers/Storages/pg/postgreSQL");
const DAO_1 = require("../DAO/DAO");
class NFeDAO extends DAO_1.DAO {
    gerarNFe(NFe) {
        return __awaiter(this, void 0, void 0, function* () {
            const ide = jsonNFe.nfeProc.NFe.infNFe.ide;
            const chave = jsonNFe.nfeProc.NFe.infNFe;
            try {
                const res = yield postgreSQL_1.postgreSQL.query("UPDATE " + NFeDAO.tbl_notas + " SET  id_nfe = '" + ide.nNF + "', doc_nfe = '" + ide.cNF + "', situacao_nfe ='" + ide.tpNF + "', chave_nfe ='" + chave.chNFe + "', protocolo_nfe = '" + chave.Id + "' WHERE id_sale = '" + NFe.id_sale + "'");
                return res;
            }
            catch (err) {
                return (new NFeDAO().errors(err));
            }
        });
    }
    ;
}
exports.NFeDAO = NFeDAO;
NFeDAO.tbl_notas = 'sales';
NFeDAO.tbl_filiais = 'filiais';
NFeDAO.tbl_users = 'users';
NFeDAO.tbl_persons = 'persons';
NFeDAO.tbl_items_nota = 'itens_sale';
NFeDAO.tbl_products = 'products';
NFeDAO.tbl_table_trib = 'table_trib';
NFeDAO.tbl_un_meds = 'un_meds';
NFeDAO.tbl_ceps = 'ceps';
NFeDAO.tbl_cities = 'cities';
NFeDAO.tbl_paises = 'paises';
