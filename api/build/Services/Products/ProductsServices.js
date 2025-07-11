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
exports.ProductsServices = void 0;
const ProductsDTO_1 = require("../../Dtos/Products/ProductsDTO");
class ProductsServices {
    saveProduct(Product) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield new ProductsDTO_1.ProductsDTO().saveProduct(Product);
            return resp;
        });
    }
    ;
    updateProduct(Product) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield new ProductsDTO_1.ProductsDTO().updateProduct(Product);
            return resp;
        });
    }
    ;
    listProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield new ProductsDTO_1.ProductsDTO().listProducts();
            return resp;
        });
    }
    ;
    listProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield new ProductsDTO_1.ProductsDTO().listProduct(id);
            return resp;
        });
    }
    listProductQuery(list) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield new ProductsDTO_1.ProductsDTO().listProductQuery(list);
            return resp;
        });
    }
    ;
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield new ProductsDTO_1.ProductsDTO().deleteProduct(id);
            return resp;
        });
    }
}
exports.ProductsServices = ProductsServices;
