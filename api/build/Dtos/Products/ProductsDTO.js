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
exports.ProductsDTO = void 0;
const ProductDAO_1 = require("../../Entities/Product/ProductDAO");
const table = ProductDAO_1.ProductDAO.table;
const msgNameAlreadyExists = 'Produto já existe';
const msgBarCodeAlreadyExists = "Còdigo de barras pertence a outro produto";
const msgRecordSucess = 'Produto gravado com sucesso';
const msgProductNotFound = 'Produto não localiado';
const msgProductUpdatedSuccessfully = 'Produto atualizado com sucesso';
class ProductsDTO {
    findProduct(Product) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield new ProductDAO_1.ProductDAO().selectHandle(table, 'id_product', Product.id);
            return product;
        });
    }
    ;
    findProductName(Product) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield new ProductDAO_1.ProductDAO().selectHandle(table, 'descric_product', Product.name);
            return product;
        });
    }
    ;
    findProductBarCode(Product) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield new ProductDAO_1.ProductDAO().selectHandle(table, 'bar_code', Product.barCode);
            return product;
        });
    }
    ;
    saveProduct(Product) {
        return __awaiter(this, void 0, void 0, function* () {
            const productBarCode = yield this.findProductBarCode(Product);
            if (!productBarCode[0]) {
                const productName = yield this.findProductName(Product);
                if (productName[0]) {
                    return (msgNameAlreadyExists);
                }
                else {
                    const product = yield new ProductDAO_1.ProductDAO().insert(Product);
                    return (msgRecordSucess);
                }
            }
            else {
                return (msgBarCodeAlreadyExists);
            }
        });
    }
    ;
    updateProduct(Product) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield this.findProduct(Product);
            if (product[0].id_product === Product.id) {
                const personUpdate = yield new ProductDAO_1.ProductDAO().update(Product);
                if (personUpdate) {
                    return personUpdate;
                }
                else {
                    return (msgProductUpdatedSuccessfully);
                }
            }
            else {
                return (msgProductNotFound);
            }
        });
    }
    ;
    listProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield new ProductDAO_1.ProductDAO().select(table, 'id_product');
            return resp;
        });
    }
    ;
    listProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield new ProductDAO_1.ProductDAO().selectOne(table, id, 'id_product');
            return resp;
        });
    }
    ;
    listProductQuery(list) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield new ProductDAO_1.ProductDAO().selectQuery(list);
            return resp;
        });
    }
    ;
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield new ProductDAO_1.ProductDAO().delete(table, id, 'id_product');
            return resp;
        });
    }
}
exports.ProductsDTO = ProductsDTO;
