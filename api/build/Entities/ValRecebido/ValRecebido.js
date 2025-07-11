"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValRecebido = void 0;
const ValRecebidoDAO_1 = require("./ValRecebidoDAO");
class ValRecebido extends ValRecebidoDAO_1.ValRecebidoDAO {
    constructor(id_val, fk_conta, fk_venda, fk_user, valor, data_recebimento, descricao, fk_person) {
        super();
        this.id_val = 0;
        this.fk_conta = 0;
        this.fk_venda = 0;
        this.fk_user = 0;
        this.valor = 0;
        this.descricao = '';
        this.fk_person = 0;
        this.id_val = id_val;
        this.fk_conta = fk_conta;
        this.fk_venda = fk_venda;
        this.fk_user = fk_user;
        this.valor = valor;
        this.data_recebimento = data_recebimento;
        this.descricao = descricao;
        this.fk_person = fk_person;
    }
}
exports.ValRecebido = ValRecebido;
