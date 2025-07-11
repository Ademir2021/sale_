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
exports.PersonsServices = void 0;
const PersonsDTO_1 = require("../../Dtos/Persons/PersonsDTO");
class PersonsServices {
    savePerson(Person) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield new PersonsDTO_1.PersonsDTO().savePerson(Person);
            return resp;
        });
    }
    ;
    updatePerson(Person) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield new PersonsDTO_1.PersonsDTO().updatePerson(Person);
            return resp;
        });
    }
    ;
    listPersons() {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield new PersonsDTO_1.PersonsDTO().listPersons();
            return resp;
        });
    }
    ;
    listPerson(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield new PersonsDTO_1.PersonsDTO().listPerson(id);
            return resp;
        });
    }
    ;
    listPersonsByLoggedInUser(id, privilege) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield new PersonsDTO_1.PersonsDTO().listPersonsByLoggedInUser(id, privilege);
            return resp;
        });
    }
    ;
    deletePerson(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield new PersonsDTO_1.PersonsDTO().deletePerson(id);
            return resp;
        });
    }
    ;
}
exports.PersonsServices = PersonsServices;
