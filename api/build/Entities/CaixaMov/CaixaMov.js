"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaixaMov = void 0;
const CaixaMovDAO_1 = require("./CaixaMovDAO");
class CaixaMov extends CaixaMovDAO_1.CaixaMovDAO {
    constructor(id_caixa, fk_val, data_recebimento, debito, credito, saldo) {
        super();
        this.id_caixa = 0;
        this.fk_val = 0;
        this.debito = 0;
        this.credito = 0;
        this.saldo = 0;
        this.id_caixa = id_caixa;
        this.fk_val = fk_val;
        this.data_recebimento = data_recebimento;
        this.debito = debito;
        this.credito = credito;
        this.saldo = saldo;
    }
}
exports.CaixaMov = CaixaMov;
