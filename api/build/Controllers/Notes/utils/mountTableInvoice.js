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
exports.mountTableInvoice = mountTableInvoice;
function mountTableInvoice(invoices) {
    return __awaiter(this, void 0, void 0, function* () {
        const header = [
            { text: "Número", style: "columnsTitle" },
            { text: "Tipo", style: "columnsTitle" },
            { text: "Vencimento", style: "columnsTitle" },
            { text: "Valor", style: "columnsTitle" },
        ];
        const rows = invoices.map(invoice => [
            invoice.id_conta,
            invoice.tipo,
            new Date(invoice.vencimento).toLocaleDateString("pt-BR"),
            invoice.valor
        ]);
        return [header, ...rows];
    });
}
