"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDAO = void 0;
const postgreSQL_1 = require("../../Providers/Storages/pg/postgreSQL");
const DAO_1 = require("../DAO/DAO");
class ProductDAO extends DAO_1.DAO {
    insert(Product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield postgreSQL_1.postgreSQL.query('INSERT INTO ' + ProductDAO.table + '("descric_product", "val_max_product", "val_min_product", "fk_brand", "fk_sector", "fk_un_med", "bar_code", "image", "fk_classe", "fk_grupo_fiscal", "fk_tipo_prod", "ncm") VALUES ('
                    + "'" + Product.name + "', '" + Product.valMax + "', '" + Product.valMin + "', '" + Product.fkBrand + "', '" + Product.fkSector + "', '" + Product.fk_un_med + "' ,'" + Product.barCode + "', '" + Product.image + "', '" + Product.fk_classe + "', '" + Product.fk_grupo_fiscal + "','" + Product.fk_tipo_prod + "','" + Product.ncm + "')");
            }
            catch (err) {
                return (new ProductDAO().errors(err));
            }
        });
    }
    ;
    update(Product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield postgreSQL_1.postgreSQL.query("UPDATE " + ProductDAO.table + " SET updated_at = now(), descric_product = '" + Product.name + "', val_max_product = '"
                    + Product.valMax + "', val_min_product ='" + Product.valMin + "', fk_brand = '" + Product.fkBrand + "', fk_sector = '" + Product.fkSector + "',fk_un_med= '" + Product.fk_un_med + "', bar_code = '" + Product.barCode + "', image = '" + Product.image + "', fk_classe = '" + Product.fk_classe + "', fk_grupo_fiscal = '" + Product.fk_grupo_fiscal + "', fk_tipo_prod = '" + Product.fk_tipo_prod + "', ncm = '" + Product.ncm + "' WHERE id_product = '" + Product.id + "'");
            }
            catch (err) {
                return (new ProductDAO().errors(err));
            }
        });
    }
    ;
    selectQuery(list) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield postgreSQL_1.postgreSQL.query("SELECT *FROM " + ProductDAO.table + " WHERE descric_product ILIKE '" + "%" + list.descric_product + "%" + "' OR fk_brand = '" + list.fk_brand + "' OR fk_sector = '" + list.fk_sector + "' ORDER BY descric_product");
                return res.rows;
            }
            catch (err) {
                return (new ProductDAO().errors(err));
            }
        });
    }
    ;
}
exports.ProductDAO = ProductDAO;
ProductDAO.table = "products";
