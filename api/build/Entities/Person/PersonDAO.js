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
exports.PersonDAO = void 0;
const DAO_1 = require("../DAO/DAO");
const postgreSQL_1 = require("../../Providers/Storages/pg/postgreSQL");
class PersonDAO extends DAO_1.DAO {
    insert(Person) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield postgreSQL_1.postgreSQL.query('INSERT INTO ' + PersonDAO.table + '(name_pers, cpf_pers, phone_pers, address_pers, num_address, fk_name_filial, fk_id_user, bairro_pers, fk_cep, rg, cnpj, inscricao, fantasia, limit_cred, fk_grupo) VALUES (' + "'" + Person.name + "', '" + Person.cpf_pers + "', '" + Person.phone_pers + "', '" + Person.address_pers + "', '" + Person.num_address + "', '" + Person.fk_name_filial + "', '" + Person.fk_id_user + "', '" + Person.bairro_pers + "', '" + Person.fk_cep + "', '" + Person.rg + "', '" + Person.cnpj + "', '" + Person.inscricao + "', '" + Person.fantasia + "', '" + Person.limit_cred + "', '" + Person.fk_grupo + "')");
            }
            catch (err) {
                return (new PersonDAO().errors(err));
            }
        });
    }
    ;
    update(Person) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield postgreSQL_1.postgreSQL.query("UPDATE " + PersonDAO.table + " SET updated_at =  now(), name_pers = '" + Person.name + "', cpf_pers = '" + Person.cpf_pers + "', phone_pers ='" + Person.phone_pers + "', address_pers ='" + Person.address_pers + "', num_address = '" + Person.num_address + "', bairro_pers = '" + Person.bairro_pers + "', fk_cep = '" + Person.fk_cep + "', fk_name_filial = '" + Person.fk_name_filial + "', rg = '" + Person.rg + "', cnpj = '" + Person.cnpj + "', inscricao = '" + Person.inscricao + "', fantasia = '" + Person.fantasia + "', limit_cred = '" + Person.limit_cred + "', fk_grupo = '" + Person.fk_grupo + "' WHERE id_person = '" + Person.id + "'");
            }
            catch (err) {
                return (new PersonDAO().errors(err));
            }
        });
    }
    ;
}
exports.PersonDAO = PersonDAO;
PersonDAO.table = "persons";
