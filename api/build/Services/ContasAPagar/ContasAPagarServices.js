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
exports.ContasAPagarServices = void 0;
const ContasAPagarDTO_1 = require("../../Dtos/ContasAPagar/ContasAPagarDTO");
class ContasAPagarServices {
    insert(contaPagar) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = new ContasAPagarDTO_1.ContasAPagarDTO().insert(contaPagar);
            return res;
        });
    }
    ;
    update(contaPagar) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = new ContasAPagarDTO_1.ContasAPagarDTO().update(contaPagar);
            return res;
        });
    }
    ;
    listContasAPagarByLoggedInUser(id, privilege) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = new ContasAPagarDTO_1.ContasAPagarDTO().listContasAPagarByLoggedInUser(id, privilege);
            return res;
        });
    }
    ;
}
exports.ContasAPagarServices = ContasAPagarServices;
