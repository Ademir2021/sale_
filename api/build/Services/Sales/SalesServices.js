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
exports.SalesServices = void 0;
const SalesDTO_1 = require("../../Dtos/Sales/SalesDTO");
class SalesServices {
    registerSale(Sale) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield new SalesDTO_1.SalesDTO().registerSale(Sale);
            return resp;
        });
    }
    ;
    listSalesByLoggedInUser(id, privilege) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield new SalesDTO_1.SalesDTO().listSalesByLoggedInUser(id, privilege);
            return resp;
        });
    }
    ;
    findSales() {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield new SalesDTO_1.SalesDTO().findSales();
            return resp;
        });
    }
    ;
}
exports.SalesServices = SalesServices;
