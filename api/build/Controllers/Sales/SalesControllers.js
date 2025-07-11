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
exports.SalesControllers = void 0;
const Sale_1 = require("../../Entities/Sale/Sale");
const SalesDTO_1 = require("../../Dtos/Sales/SalesDTO");
const SaleDAO_1 = require("../../Entities/Sale/SaleDAO");
class SalesControllers {
    registerSale(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const sale_ = request.body;
            const sale = new Sale_1.Sale(sale_.person.fk_name_pers, sale_.disc_sale, sale_.filial, sale_.user.user_id, sale_.tItens, sale_.paySale, sale_.dinheiro, sale_.itens, sale_.duplicatas);
            const registerSaleDTO = yield new SalesDTO_1.salesDTO().registerSale(sale);
            response.json([registerSaleDTO]);
        });
    }
    ;
    findUserSale(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, privilege } = request.body[0];
            const sales = yield new SalesDTO_1.salesDTO().listSalesByLoggedInUser(id, privilege);
            response.json(sales);
        });
    }
    ;
    findSale(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const findUserSale = yield new SaleDAO_1.SaleDAO().select("sales", "id_sale");
            response.json(findUserSale);
        });
    }
    ;
}
exports.SalesControllers = SalesControllers;
