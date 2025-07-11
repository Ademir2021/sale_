"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const ProductDAO_1 = require("./ProductDAO");
class Product extends ProductDAO_1.ProductDAO {
    constructor(id, name, valMax, valMin, fkBrand, fkSector, fk_un_med, barCode, image, fk_classe, fk_grupo_fiscal, fk_tipo_prod, ncm) {
        super();
        this.valMax = 0;
        this.valMin = 0;
        this.fkBrand = new Brand().id;
        this.fkSector = new Sector().id;
        this.fk_un_med = 1;
        this.barCode = "";
        this.image = "";
        this.fk_classe = 1;
        this.fk_grupo_fiscal = 1;
        this.fk_tipo_prod = 1;
        this.ncm = '';
        this.id = id;
        this.name = name;
        this.valMax = valMax;
        this.valMin = valMin;
        this.fkBrand = fkBrand;
        this.fkSector = fkSector;
        this.fk_un_med = fk_un_med;
        this.barCode = barCode;
        this.image = image;
        this.fk_classe = fk_classe;
        this.fk_grupo_fiscal = fk_grupo_fiscal;
        this.fk_tipo_prod = fk_tipo_prod;
        this.ncm = ncm;
    }
}
exports.Product = Product;
class Brand extends ProductDAO_1.ProductDAO {
    constructor() {
        super();
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
}
;
class Sector extends ProductDAO_1.ProductDAO {
    constructor() {
        super();
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
}
