"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sale = void 0;
const SaleDAO_1 = require("./SaleDAO");
class Sale extends SaleDAO_1.SaleDAO {
    constructor(fk_person, disc_sale, fk_filial, fk_user, tNote, paySale, dinheiro, itens, contasReceber) {
        super();
        this.fk_person = 0;
        this.disc_sale = 0;
        this.fk_filial = 0;
        this.fk_user = 0;
        this.tNote = 0;
        this.paySale = 0;
        this.dinheiro = 0;
        this.itens = [];
        this.contasReceber = [];
        this.fk_person = fk_person;
        this.disc_sale = disc_sale;
        this.fk_filial = fk_filial;
        this.fk_user = fk_user;
        this.tNote = tNote;
        this.paySale = paySale;
        this.dinheiro = dinheiro;
        this.itens = itens;
        this.contasReceber = contasReceber;
    }
}
exports.Sale = Sale;
