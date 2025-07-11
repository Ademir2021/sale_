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
exports.PersonsControllers = void 0;
const Person_1 = require("../../Entities/Person/Person");
const PersonsServices_1 = require("../../Services/Persons/PersonsServices");
class PersonsControllers {
    savePerson(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = request.body;
            const person = new Person_1.Person(resp.id_person, resp.name_pers, resp.cpf_pers, resp.phone_pers, resp.address_pers, resp.num_address, resp.bairro_pers, resp.fk_cep, resp.fk_name_filial, resp.fk_id_user, resp.rg, resp.cnpj, resp.inscricao, resp.fantasia, resp.limit_cred, resp.fk_grupo);
            const res = yield new PersonsServices_1.PersonsServices().savePerson(person);
            response.json(res);
        });
    }
    ;
    updatePerson(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = request.body;
            const person = new Person_1.Person(resp.id_person, resp.name_pers, resp.cpf_pers, resp.phone_pers, resp.address_pers, resp.num_address, resp.bairro_pers, resp.fk_cep, resp.fk_name_filial, resp.fk_id_user, resp.rg, resp.cnpj, resp.inscricao, resp.fantasia, resp.limit_cred, resp.fk_grupo);
            const res = yield new PersonsServices_1.PersonsServices().updatePerson(person);
            response.json(res);
        });
    }
    ;
    listPersons(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield new PersonsServices_1.PersonsServices().listPersons();
            response.json(resp);
        });
    }
    ;
    listPerson(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.body;
            const resp = yield new PersonsServices_1.PersonsServices().listPerson(id);
            response.json(resp);
        });
    }
    ;
    listUserPersons(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, privilege } = request.body[0];
            const resp = yield new PersonsServices_1.PersonsServices().listPersonsByLoggedInUser(id, privilege);
            response.json(resp);
        });
    }
    ;
    deletePerson(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.body.person;
            const resp = yield new PersonsServices_1.PersonsServices().deletePerson(id);
            response.json(resp);
        });
    }
    ;
}
exports.PersonsControllers = PersonsControllers;
;
