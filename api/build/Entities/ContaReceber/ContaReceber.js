"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaReceber = void 0;
const ContaReceberDAO_1 = require("./ContaReceberDAO");
class ContaReceber extends ContaReceberDAO_1.ContaReceberDAO {
    constructor(id_conta, fk_filial, tipo, fkVenda, fkUser, parcela, valor, multa, juros, desconto, emissao, vencimento, saldo, pagamento, recebimento, observacao, fkPagador) {
        super();
        this.id_conta = 0;
        this.fk_filial = 0;
        this.tipo = '';
        this.fk_venda = 0;
        this.fk_user = 0;
        this.parcela = '';
        this.valor = 0;
        this.multa = 0;
        this.juros = 0;
        this.desconto = 0;
        this.saldo = 0;
        this.recebimento = 0;
        this.observacao = '';
        this.fk_pagador = 0;
        this.id_conta = id_conta;
        this.fk_filial = fk_filial;
        this.tipo = tipo;
        this.fk_venda = fkVenda;
        this.fk_user = fkUser;
        this.parcela = parcela;
        this.valor = valor;
        this.multa = multa;
        this.juros = juros;
        this.desconto = desconto;
        this.emissao = emissao;
        this.vencimento = vencimento;
        this.saldo = saldo;
        this.pagamento = pagamento;
        this.recebimento = recebimento;
        this.observacao = observacao;
        this.fk_pagador = fkPagador;
    }
}
exports.ContaReceber = ContaReceber;
