"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContasPagar = void 0;
const ContaPagarDAO_1 = require("./ContaPagarDAO");
class ContasPagar extends ContaPagarDAO_1.ContaPagarDAO {
    constructor(id_conta, fk_filial, tipo, fk_compra, fk_user, parcela, valor, multa, juros, desconto, emissao, vencimento, saldo, pagamento, recebimento, observacao, fk_beneficiario, fk_despesa) {
        super();
        this.id_conta = 0;
        this.fk_filial = 0;
        this.tipo = '';
        this.fk_compra = 0;
        this.fk_user = 0;
        this.parcela = '';
        this.valor = 0;
        this.multa = 0;
        this.juros = 0;
        this.desconto = 0;
        this.saldo = 0;
        this.recebimento = 0;
        this.observacao = '';
        this.fk_beneficiario = 0;
        this.fk_despesa = 0;
        this.id_conta = id_conta;
        this.fk_filial = fk_filial;
        this.tipo = tipo;
        this.fk_compra = fk_compra;
        this.fk_user = fk_user;
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
        this.fk_beneficiario = fk_beneficiario;
        this.fk_despesa = fk_despesa;
    }
}
exports.ContasPagar = ContasPagar;
