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
exports.SalesDTO = void 0;
const SaleDAO_1 = require("../../Entities/Sale/SaleDAO");
const table = SaleDAO_1.SaleDAO.table;
class SalesDTO {
    findSalesByLoggedInUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sales = yield new SaleDAO_1.SaleDAO().selectOne(table, id, "fk_name_user");
            return (sales);
        });
    }
    ;
    findSalesAdmin() {
        return __awaiter(this, void 0, void 0, function* () {
            const sales = yield new SaleDAO_1.SaleDAO().select(table, "id_sale");
            return (sales);
        });
    }
    ;
    registerSale(Sale) {
        return __awaiter(this, void 0, void 0, function* () {
            const registerSale = yield new SaleDAO_1.SaleDAO().insert(Sale);
            return ([registerSale]);
        });
    }
    ;
    listSalesByLoggedInUser(id, privilege) {
        return __awaiter(this, void 0, void 0, function* () {
            if (privilege == 2) {
                const sales = yield this.findSalesAdmin();
                return sales;
            }
            else {
                const sales = yield this.findSalesByLoggedInUser(id);
                return sales;
            }
        });
    }
    ;
    findSales() {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield new SaleDAO_1.SaleDAO().select("sales", "id_sale");
            return resp;
        });
    }
}
exports.SalesDTO = SalesDTO;
