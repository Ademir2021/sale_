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
const PersonsDTO_1 = require("../../Dtos/Persons/PersonsDTO");
const PersonDAO_1 = require("../../Entities/Person/PersonDAO");
const table = Person_1.Person.table;
class PersonsControllers {
    savePerson(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = request.body;
            const person = new Person_1.Person(resp.id_person, resp.name_pers, resp.cpf_pers, resp.phone_pers, resp.address_pers, resp.num_address, resp.bairro_pers, resp.fk_cep, resp.fk_name_filial, resp.fk_id_user, resp.rg, resp.cnpj, resp.inscricao, resp.fantasia, resp.limit_cred, resp.fk_grupo);
            const personDTOSave = yield new PersonsDTO_1.PersonsDTO().savePerson(person);
            response.json(personDTOSave);
        });
    }
    ;
    listPersons(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const person = yield new PersonDAO_1.PersonDAO().select(table, 'id_person');
            response.json(person);
        });
    }
    ;
    listPerson(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.body.person;
            const persons = yield new PersonDAO_1.PersonDAO().selectOne(table, id, 'id_person');
            response.json(persons);
        });
    }
    ;
    listUserPersons(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, privilege } = request.body[0];
            const users = yield new PersonsDTO_1.PersonsDTO().listPersonsByLoggedInUser(id, privilege);
            response.json(users);
        });
    }
    ;
    updatePerson(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = request.body;
            const person = new Person_1.Person(resp.id_person, resp.name_pers, resp.cpf_pers, resp.phone_pers, resp.address_pers, resp.num_address, resp.bairro_pers, resp.fk_cep, resp.fk_name_filial, resp.fk_id_user, resp.rg, resp.cnpj, resp.inscricao, resp.fantasia, resp.limit_cred, resp.fk_grupo);
            const personDTOUpdate = yield new PersonsDTO_1.PersonsDTO().updatePerson(person);
            response.json(personDTOUpdate);
        });
    }
    ;
    deletePerson(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.body.person;
            const deletePerson = yield new PersonDAO_1.PersonDAO().delete(table, id, 'id_person');
            response.json(deletePerson);
        });
    }
    ;
}
exports.PersonsControllers = PersonsControllers;
;
