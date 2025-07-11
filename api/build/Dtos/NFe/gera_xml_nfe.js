"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeraXMLNFe = void 0;
const fs_1 = __importDefault(require("fs"));
const jsonNFe = require('../../../json/nfe');
const js2xmlparser = require('js2xmlparser');
const handleNFe_1 = require("./handleNFe/handleNFe");
const dt = new Date();
const year = dt.getFullYear();
const year_ = year.toString().substr(-2);
const month = dt.getMonth() + 1;
class GeraXMLNFe {
    /**
     * Método para gerar XML da NFe
     * @return void
     */
    gerarXMLNFe() {
        const chaveAcesso = jsonNFe.nfeProc.NFe.infNFe.ide.cUF +
            month +
            year_ +
            jsonNFe.nfeProc.NFe.infNFe.emit.CNPJ +
            jsonNFe.nfeProc.NFe.infNFe.ide.mod +
            jsonNFe.nfeProc.NFe.infNFe.ide.serie +
            jsonNFe.nfeProc.NFe.infNFe.ide.nNF +
            jsonNFe.nfeProc.NFe.infNFe.ide.tpEmis +
            jsonNFe.nfeProc.NFe.infNFe.ide.cNF;
        const dVerif = new handleNFe_1.HandleNFe().dvNFe(chaveAcesso);
        jsonNFe.nfeProc.NFe.infNFe.chNFe = chaveAcesso + dVerif;
        console.log(chaveAcesso + dVerif);
        const xml = js2xmlparser.parse("nfeProc", jsonNFe.nfeProc, {
            declaration: {
                include: true,
                encoding: "UTF-8"
            }
        });
        fs_1.default.writeFile('xml/nfe.xml', xml, (err) => {
            if (err) {
                throw err;
            }
            console.log('JSON da NFe convertido para XML e gravado com sucesso.');
        });
        fs_1.default.close;
        return 'Preparando para gerar o XML da NFe';
    }
    ;
}
exports.GeraXMLNFe = GeraXMLNFe;
;
