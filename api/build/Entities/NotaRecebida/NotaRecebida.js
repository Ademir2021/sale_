"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotaRecebida = void 0;
const NotaRecebidaDAO_1 = require("./NotaRecebidaDAO");
class NotaRecebida extends NotaRecebidaDAO_1.NotaRecebidaDAO {
    constructor(fk_fornecedor, data, emissao, numNota, modelo, vFrete, vSeguro, despAcessorias, encargos, acrescimo, desconto, tprodutos, total, items, contaAPagar, valsPago) {
        super();
        this.fk_fornecedor = 0;
        this.numNota = 0;
        this.modelo = '';
        this.vFrete = 0;
        this.vSeguro = 0;
        this.despAcessorias = 0;
        this.encargos = 0;
        this.acrescimo = 0;
        this.desconto = 0;
        this.tProdutos = 0;
        this.total = 0;
        this.items = [];
        this.contaAPagar = [];
        this.valsPago = [];
        this.fk_fornecedor = fk_fornecedor;
        this.data = data;
        this.emissao = emissao;
        this.numNota = numNota;
        this.modelo = modelo;
        this.vFrete = vFrete;
        this.vSeguro = vSeguro;
        this.despAcessorias = despAcessorias;
        this.encargos = encargos;
        this.acrescimo = acrescimo;
        this.desconto = desconto;
        this.tProdutos = tprodutos;
        this.total = total;
        this.items = items;
        this.contaAPagar = contaAPagar;
        this.valsPago = valsPago;
    }
}
exports.NotaRecebida = NotaRecebida;
