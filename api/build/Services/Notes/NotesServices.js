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
exports.NotesServices = void 0;
const NoteDTO_1 = require("../../Dtos/Notes/NoteDTO");
const noteDTO = new NoteDTO_1.NoteDTO();
class NotesServices {
    getNote(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const note = yield noteDTO.getNote(id);
            return note;
        });
    }
    getItemsNote(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const itemsNote = yield noteDTO.getItemsNote(id);
            return itemsNote;
        });
    }
    getInvoice(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const invoiceNote = yield noteDTO.getInvoices(id);
            return invoiceNote;
        });
    }
    getMoney(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const moneyNote = yield noteDTO.getMoney(id);
            return moneyNote;
        });
    }
}
exports.NotesServices = NotesServices;
