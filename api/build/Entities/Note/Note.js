"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
const NoteDAO_1 = require("./NoteDAO");
class Note extends NoteDAO_1.NoteDAO {
    constructor(nota, filial, comprador, cpf, endereco, num_endereco, telefone, usuario, email, emitida, val_rec, desc_venda, total_venda, fantasia, f_endereco, cnpj, inscricao, f_telefone, f_email, bairro, cep, uf, municipio, items, invoices, money) {
        super();
        this.items = [];
        this.invoices = [];
        this.nota = nota;
        this.filial = filial;
        this.comprador = comprador;
        this.cpf = cpf;
        this.endereco = endereco;
        this.num_endereco = num_endereco;
        this.telefone = telefone;
        this.cpf = cpf;
        this.usuario = usuario;
        this.email = email;
        this.emitida = emitida;
        this.val_rec = val_rec;
        this.desc_venda = desc_venda;
        this.total_venda = total_venda;
        this.fantasia = fantasia;
        this.f_endereco = f_endereco;
        this.cnpj = cnpj;
        this.inscricao = inscricao;
        this.f_telefone = f_telefone;
        this.f_email = f_email;
        this.bairro = bairro;
        this.cep = cep;
        this.uf = uf;
        this.municipio = municipio;
        this.items = items;
        this.invoices = invoices;
        this.money = money;
    }
}
exports.Note = Note;
