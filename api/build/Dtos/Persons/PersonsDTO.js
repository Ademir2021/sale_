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
exports.PersonsDTO = void 0;
const PersonDAO_1 = require("../../Entities/Person/PersonDAO");
const table = PersonDAO_1.PersonDAO.table;
const msgPhoneAlreadyExists = 'Este número de telefone já existe';
const msgCPFAlreadyExists = 'Este CPF pertence a outro Cliente';
const msgCNPJAlreadyExists = 'Este CNPJ pertence a outro Cliente';
const msgRecordSucess = 'Cliente gravado com sucesso';
const msgPersonNotFound = 'Cliente não localizada';
const msgPersonUpdatedSuccessfully = 'Cliente atualizado com sucesso';
class PersonsDTO {
    findPerson(Person) {
        return __awaiter(this, void 0, void 0, function* () {
            const person = yield new PersonDAO_1.PersonDAO().selectHandle(table, 'id_person', Person.id);
            return person;
        });
    }
    ;
    findPersonPhone(Person) {
        return __awaiter(this, void 0, void 0, function* () {
            const person = yield new PersonDAO_1.PersonDAO().selectHandle(table, 'phone_pers', Person.phone_pers);
            return person;
        });
    }
    ;
    findPersonCPF(Person) {
        return __awaiter(this, void 0, void 0, function* () {
            const person = yield new PersonDAO_1.PersonDAO().selectHandle(table, 'cpf_pers', Person.cpf_pers);
            return person;
        });
    }
    ;
    findPersonCNPJ(Person) {
        return __awaiter(this, void 0, void 0, function* () {
            const person = yield new PersonDAO_1.PersonDAO().selectHandle(table, 'cnpj', Person.cnpj);
            return person;
        });
    }
    ;
    savePerson(Person) {
        return __awaiter(this, void 0, void 0, function* () {
            const personCPF = yield this.findPersonCPF(Person);
            if (!personCPF[0] || personCPF[0].cpf_pers == '0' || personCPF[0].cpf_pers == '') {
                const personPhone = yield this.findPersonPhone(Person);
                if (personPhone[0]) {
                    return (msgPhoneAlreadyExists);
                }
                else {
                    const personCNPJ = yield this.findPersonCNPJ(Person);
                    if (!personCNPJ[0] || personCNPJ[0].cnpj == '0' || personCNPJ[0].cnpj == '') {
                        const person = yield new PersonDAO_1.PersonDAO().insert(Person);
                        return (msgRecordSucess);
                    }
                    else {
                        return msgCNPJAlreadyExists;
                    }
                }
            }
            else {
                return (msgCPFAlreadyExists);
            }
        });
    }
    ;
    updatePerson(Person) {
        return __awaiter(this, void 0, void 0, function* () {
            const person = yield this.findPerson(Person);
            if (person[0].id_person === Person.id) {
                const res = yield new PersonDAO_1.PersonDAO().update(Person);
                return (msgPersonUpdatedSuccessfully);
            }
            else {
                return (msgPersonNotFound);
            }
        });
    }
    ;
    listPersons() {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield new PersonDAO_1.PersonDAO().select(table, 'id_person');
            return resp;
        });
    }
    ;
    listPerson(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield new PersonDAO_1.PersonDAO().selectOne(table, id, 'id_person');
            return resp;
        });
    }
    ;
    listPersonsByLoggedInUser(id, privilege) {
        return __awaiter(this, void 0, void 0, function* () {
            if (privilege == 2) {
                const resp = yield new PersonDAO_1.PersonDAO().select(table, 'id_person');
                return resp;
            }
            else {
                const resp = yield new PersonDAO_1.PersonDAO().selectOne(table, id, 'fk_id_user');
                return resp;
            }
        });
    }
    ;
    deletePerson(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield new PersonDAO_1.PersonDAO().delete(table, id, 'id_person');
            return resp;
        });
    }
    ;
}
exports.PersonsDTO = PersonsDTO;
