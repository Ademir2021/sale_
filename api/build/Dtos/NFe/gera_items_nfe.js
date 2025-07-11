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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeraItemsNFe = void 0;
const fs_1 = __importDefault(require("fs"));
const jsonNFe = require('../../../json/nfe');
const NFeDAO_1 = require("../../Entities/NFe/NFeDAO");
class GeraItemsNFe {
    findItem(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield new NFeDAO_1.NFeDAO().selectOne(NFeDAO_1.NFeDAO.tbl_products, id, "id_product");
            return product[0];
        });
    }
    ;
    findTableTrib(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const table_trib = yield new NFeDAO_1.NFeDAO().selectOne(NFeDAO_1.NFeDAO.tbl_table_trib, id, "id_table_trib");
            return table_trib[0];
        });
    }
    ;
    findUnMeds(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const un_meds = yield new NFeDAO_1.NFeDAO().selectOne(NFeDAO_1.NFeDAO.tbl_un_meds, id, "id_un");
            return un_meds[0];
        });
    }
    ;
    /**
    * @description Gerar items para XML da NFe
    * @param {*} items
    * @returns String
    */
    gerarItemsNFe(items) {
        return __awaiter(this, void 0, void 0, function* () {
            jsonNFe.nfeProc.NFe.infNFe.det = [];
            for (let item of items) {
                //Funções
                const product = yield this.findItem(item.fk_product);
                const table_trib = yield this.findTableTrib(product.fk_grupo_fiscal);
                const un_med = yield this.findUnMeds(product.fk_un_med);
                //Calculos
                const vICMS = parseFloat(table_trib.icms_trib) * parseFloat(table_trib.icms_aliq);
                const vCOFINS = parseFloat(table_trib.cofins_base) * parseFloat(table_trib.cofins_aliq);
                const vPIS = parseFloat(table_trib.pis_base) * parseFloat(table_trib.pis_aliq);
                const newItem = {
                    "nItem": (jsonNFe.nfeProc.NFe.infNFe.det.length + 1).toString(),
                    "prod": {
                        "cProd": item.fk_product,
                        "cEAN": product.bar_code, //'EAN: ',
                        "xProd": product.descric_product,
                        "NCM": product.ncm, //'NCM: ',
                        "CFOP": '5102', //'CFOP:5102  Usado para vendas de mercadorias adquiridas de terceiros no mesmo Estado',
                        "uCom": un_med.un_med, //'UN:',
                        "qCom": item.amount_product,
                        "vUnCom": item.val_product,
                        "vProd": item.total_product,
                        "cEANTrib": 'EAN Tributável: ',
                        "uTrib": 'Unidade Tributável: ',
                        "qTrib": 'Quantidade Tributável: ',
                        "vUnTrib": 'Valor Unitário Tributável: ',
                        "indTot": 'Indicador de Total: '
                    },
                    "imposto": {
                        "ICMS": {
                            "ICMS00": {
                                "orig": 'Origem do ICMS',
                                "CST": 'CST:',
                                "modBC": 'Modalidade de BC:',
                                "vBC": table_trib.icms_trib, //'Valor da BC do ICMS:'
                                "pICMS": table_trib.icms_aliq, //'Alíquota do ICMS:',
                                "vICMS": vICMS, //'Valor do ICMS:'
                            }
                        },
                        "PIS": {
                            "PISAliq": {
                                "CST": table_trib.cst_pis, //'CST do PIS: ',
                                "vBC": table_trib.pis_base, //'Valor da BC do PIS: ',
                                "pPIS": table_trib.pis_aliq, //'Alíquota do PIS: ',
                                "vPIS": vPIS, //'Valor do PIS: '
                            }
                        },
                        "COFINS": {
                            "COFINSAliq": {
                                "CST": table_trib.cst_cofins, //'CST do COFINS: ',
                                "vBC": table_trib.cofins_base, //'Valor da BC do COFINS: ',
                                "pCOFINS": table_trib.cofins_aliq, //'Alíquota do COFINS: ',
                                "vCOFINS": vCOFINS //'Valor do COFINS: '
                            }
                        }
                    }
                };
                jsonNFe.nfeProc.NFe.infNFe.det.push(newItem);
            }
            ;
            fs_1.default.writeFileSync('json/nfe.json', JSON.stringify(jsonNFe, null, 2), 'utf-8');
            return 'Items gravados com sucesso.';
        });
    }
}
exports.GeraItemsNFe = GeraItemsNFe;
