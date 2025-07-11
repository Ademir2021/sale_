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
exports.NFeControllers = void 0;
const NFe_1 = require("../../Entities/NFe/NFe");
const NFeServices_1 = require("../../Services/NFe/NFeServices");
const nfe = {
    id_sale: 10,
    fk_name_filial: 1,
    fk_name_user: 1,
    fk_name_pers: 6,
    items: [],
    val_rec: 100.00,
    disc_sale: 2.20,
    total_sale: 97.80
};
class NFeControllers {
    handleNFe(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = new NFe_1.NFe(nfe.id_sale, nfe.fk_name_filial, nfe.fk_name_user, nfe.fk_name_pers, [], nfe.val_rec, nfe.disc_sale, nfe.total_sale);
            const resp = yield new NFeServices_1.NFeServices().handleNota(res);
            // console.log(resp)
            return response.json(resp);
        });
    }
    gerarNFe(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = request.body;
            const resp = new NFe_1.NFe(res.id_sale, res.fk_name_filial, res.fk_name_user, res.fk_name_pers, [], res.val_rec, res.disc_sale, res.total_sale);
            const resp_ = yield new NFeServices_1.NFeServices().handleNota(resp);
            return response.json(resp_);
        });
    }
}
exports.NFeControllers = NFeControllers;
