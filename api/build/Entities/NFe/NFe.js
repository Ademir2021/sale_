"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFe = void 0;
const NFeDAO_1 = require("./NFeDAO");
class NFe extends NFeDAO_1.NFeDAO {
    constructor(id_nota, fk_name_filial, fk_name_user, fk_name_pers, items, val_rec, disc_sale, total_sale) {
        super();
        this.id_nota = 0;
        this.fk_name_filial = 0;
        this.fk_name_user = 0;
        this.fk_name_pers = 0;
        this.items = [];
        this.val_rec = 0;
        this.disc_sale = 0;
        this.total_sale = 0;
        this.id_nota = id_nota;
        this.fk_name_filial = fk_name_filial;
        this.fk_name_user = fk_name_user;
        this.fk_name_pers = fk_name_pers;
        this.items = items;
        this.val_rec = val_rec;
        this.disc_sale = disc_sale;
        this.total_sale = total_sale;
    }
}
exports.NFe = NFe;
