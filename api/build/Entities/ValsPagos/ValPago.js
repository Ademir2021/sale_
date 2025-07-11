"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValPago = void 0;
const ValPagoDAO_1 = require("./ValPagoDAO");
class ValPago extends ValPagoDAO_1.ValPagoDAO {
    constructor(id_val, fk_conta, fk_compra, fk_user, valor, data_recebimento, descricao, fk_person, fk_despesa) {
        super();
        this.id_val = 0;
        this.fk_conta = 0;
        this.fk_compra = 0;
        this.fk_user = 0;
        this.valor = 0;
        this.descricao = '';
        this.fk_person = 0;
        this.fk_despesa = 0;
        this.id_val = id_val;
        this.fk_conta = fk_conta;
        this.fk_compra = fk_compra;
        this.fk_user = fk_user;
        this.valor = valor;
        this.data_recebimento = data_recebimento;
        this.descricao = descricao;
        this.fk_person = fk_person;
        this.fk_despesa = fk_despesa;
    }
}
exports.ValPago = ValPago;
