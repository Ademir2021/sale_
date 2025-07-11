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
exports.ProductControllers = void 0;
const Product_1 = require("../../Entities/Product/Product");
const ProductsServices_1 = require("../../Services/Products/ProductsServices");
const DAO_1 = require("../../Entities/DAO/DAO");
class ProductControllers extends DAO_1.DAO {
    saveProduct(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = request.body;
            const product = new Product_1.Product(resp.id_product, resp.descric_product, resp.val_max_product, resp.val_min_product, resp.fk_brand, resp.fk_sector, resp.fk_un_med, resp.bar_code, resp.image, resp.fk_classe, resp.fk_grupo_fiscal, resp.fk_tipo_prod, resp.ncm);
            const res = yield new ProductsServices_1.ProductsServices().saveProduct(product);
            response.json(res);
        });
    }
    ;
    updateProduct(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = request.body;
            const product = new Product_1.Product(resp.id_product, resp.descric_product, resp.val_max_product, resp.val_min_product, resp.fk_brand, resp.fk_sector, resp.fk_un_med, resp.bar_code, resp.image, resp.fk_classe, resp.fk_grupo_fiscal, resp.fk_tipo_prod, resp.ncm);
            const res = yield new ProductsServices_1.ProductsServices().updateProduct(product);
            response.json(res);
        });
    }
    ;
    listProducts(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield new ProductsServices_1.ProductsServices().listProducts();
            response.json(resp);
        });
    }
    ;
    listProduct(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.body;
            const resp = yield new ProductsServices_1.ProductsServices().listProduct(id);
            response.json(resp);
        });
    }
    ;
    listProductParam(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            response.json(id);
        });
    }
    ;
    listProductQuery(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const list = request.query;
            const resp = yield new ProductsServices_1.ProductsServices().listProductQuery(list);
            response.json(resp);
        });
    }
    ;
    deleteProduct(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.body;
            const resp = yield new ProductsServices_1.ProductsServices().deleteProduct(id);
            response.json(resp);
        });
    }
    ;
    findAllUnMeds(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const uniMeds = yield new ProductControllers().select('un_meds', 'id_un');
            response.json(uniMeds);
        });
    }
    ;
}
exports.ProductControllers = ProductControllers;
