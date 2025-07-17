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
                const query = `
                INSERT INTO ${ProductDAO.table}
                (descric_product, val_max_product, val_min_product, fk_brand, fk_sector, fk_un_med, bar_code, image, fk_classe, fk_grupo_fiscal, fk_tipo_prod, ncm)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
            `;
                const values = [
                    Product.name,
                    Product.valMax,
                    Product.valMin,
                    Product.fkBrand,
                    Product.fkSector,
                    Product.fk_un_med,
                    Product.barCode,
                    Product.image,
                    Product.fk_classe,
                    Product.fk_grupo_fiscal,
                    Product.fk_tipo_prod,
                    Product.ncm
                ];
                yield postgreSQL_1.postgreSQL.query(query, values);
            }
            catch (err) {
                return new ProductDAO().errors(err);
            }
        });
    }
    update(Product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = `
                UPDATE ${ProductDAO.table}
                SET 
                    updated_at = now(),
                    descric_product = $1,
                    val_max_product = $2,
                    val_min_product = $3,
                    fk_brand = $4,
                    fk_sector = $5,
                    fk_un_med = $6,
                    bar_code = $7,
                    image = $8,
                    fk_classe = $9,
                    fk_grupo_fiscal = $10,
                    fk_tipo_prod = $11,
                    ncm = $12
                WHERE id_product = $13
            `;
                const values = [
                    Product.name,
                    Product.valMax,
                    Product.valMin,
                    Product.fkBrand,
                    Product.fkSector,
                    Product.fk_un_med,
                    Product.barCode,
                    Product.image,
                    Product.fk_classe,
                    Product.fk_grupo_fiscal,
                    Product.fk_tipo_prod,
                    Product.ncm,
                    Product.id
                ];
                yield postgreSQL_1.postgreSQL.query(query, values);
            }
            catch (err) {
                return new ProductDAO().errors(err);
            }
        });
    }
    selectQuery(list) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conditions = [];
                const values = [];
                let paramIndex = 1;
                if (list.descric_product) {
                    conditions.push(`descric_product ILIKE $${paramIndex++}`);
                    values.push(`%${list.descric_product}%`);
                }
                if (list.fk_brand) {
                    conditions.push(`fk_brand = $${paramIndex++}`);
                    values.push(list.fk_brand);
                }
                if (list.fk_sector) {
                    conditions.push(`fk_sector = $${paramIndex++}`);
                    values.push(list.fk_sector);
                }
                const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(" OR ")}` : "";
                const query = `
                SELECT * FROM ${ProductDAO.table}
                ${whereClause}
                ORDER BY descric_product
            `;
                const res = yield postgreSQL_1.postgreSQL.query(query, values);
                return res.rows;
            }
            catch (err) {
                return new ProductDAO().errors(err);
            }
        });
    }
}
exports.ProductDAO = ProductDAO;
ProductDAO.table = "products";
