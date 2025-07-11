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
exports.ProductsControllers = void 0;
const Product_1 = require("../../Entities/Product/Product");
const ProductDAO_1 = require("../../Entities/Product/ProductDAO");
const ProductsDTO_1 = require("../../Dtos/Products/ProductsDTO");
const DAO_1 = require("../../Entities/DAO/DAO");
const table = Product_1.Product.table;
class ProductsControllers extends DAO_1.DAO {
    saveProduct(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = request.body;
            const product = new Product_1.Product(resp.id_product, resp.descric_product, resp.val_max_product, resp.val_min_product, resp.fk_brand, resp.fk_sector, resp.fk_un_med, resp.bar_code, resp.image, resp.fk_classe, resp.fk_grupo_fiscal, resp.fk_tipo_prod, resp.ncm);
            const productDTOSave = yield new ProductsDTO_1.ProductsDTO().saveProduct(product);
            response.json(productDTOSave);
        });
    }
    ;
    listProducts(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield new ProductDAO_1.ProductDAO().select(table, 'id_product');
            response.json(product);
        });
    }
    ;
    listProduct(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.body;
            const persons = yield new ProductDAO_1.ProductDAO().selectOne(table, id, 'id_product');
            response.json(persons);
        });
    }
    ;
    updateProduct(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = request.body;
            const product = new Product_1.Product(resp.id_product, resp.descric_product, resp.val_max_product, resp.val_min_product, resp.fk_brand, resp.fk_sector, resp.fk_un_med, resp.bar_code, resp.image, resp.fk_classe, resp.fk_grupo_fiscal, resp.fk_tipo_prod, resp.ncm);
            const productDTOUpdate = yield new ProductsDTO_1.ProductsDTO().updateProduct(product);
            response.json(productDTOUpdate);
        });
    }
    ;
    deleteProduct(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.body;
            const deleteProduct = yield new ProductDAO_1.ProductDAO().delete(table, id, 'id_product');
            response.json(deleteProduct);
        });
    }
    ;
    findAllUnMeds(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const uniMeds = yield new ProductsControllers().select('un_meds', 'id_un');
            response.json(uniMeds);
        });
    }
    ;
}
exports.ProductsControllers = ProductsControllers;
