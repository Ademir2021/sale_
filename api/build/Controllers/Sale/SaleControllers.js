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
exports.SaleControllers = void 0;
const Sale_1 = require("../../Entities/Sale/Sale");
const SalesServices_1 = require("../../Services/Sales/SalesServices");
class SaleControllers {
    registerSale(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const sale_ = request.body;
            const sale = new Sale_1.Sale(sale_.person.fk_name_pers, sale_.disc_sale, sale_.filial, sale_.user.user_id, sale_.tItens, sale_.paySale, sale_.dinheiro, sale_.itens, sale_.duplicatas);
            const resp = yield new SalesServices_1.SalesServices().registerSale(sale);
            response.json([resp]);
        });
    }
    ;
    findUserSale(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, privilege } = request.body[0];
            const resp = yield new SalesServices_1.SalesServices().listSalesByLoggedInUser(id, privilege);
            response.json(resp);
        });
    }
    ;
    findSales(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield new SalesServices_1.SalesServices().findSales();
            response.json(resp);
        });
    }
    ;
}
exports.SaleControllers = SaleControllers;
