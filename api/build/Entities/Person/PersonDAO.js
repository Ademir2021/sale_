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
    insert(person) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = `
                INSERT INTO ${PersonDAO.table}
                (name_pers, cpf_pers, phone_pers, address_pers, num_address,
                fk_name_filial, fk_id_user, bairro_pers, fk_cep, rg, cnpj,
                inscricao, fantasia, limit_cred, fk_grupo, date_of_birth, age )
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)`;
                const values = [
                    person.name,
                    person.cpf_pers,
                    person.phone_pers,
                    person.address_pers,
                    person.num_address,
                    person.fk_name_filial,
                    person.fk_id_user,
                    person.bairro_pers,
                    person.fk_cep,
                    person.rg,
                    person.cnpj,
                    person.inscricao,
                    person.fantasia,
                    person.limit_cred,
                    person.fk_grupo,
                    person.date_of_birth,
                    person.age
                ];
                yield postgreSQL_1.postgreSQL.query(query, values);
            }
            catch (err) {
                return new PersonDAO().errors(err);
            }
        });
    }
    update(person) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = `
                UPDATE ${PersonDAO.table}
                SET 
                    updated_at = now(),
                    name_pers = $1,
                    cpf_pers = $2,
                    phone_pers = $3,
                    address_pers = $4,
                    num_address = $5,
                    bairro_pers = $6,
                    fk_cep = $7,
                    fk_name_filial = $8,
                    rg = $9,
                    cnpj = $10,
                    inscricao = $11,
                    fantasia = $12,
                    limit_cred = $13,
                    fk_grupo = $14,
                    date_of_birth = $16,
                    age = $17
                WHERE id_person = $15
            `;
                const values = [
                    person.name,
                    person.cpf_pers,
                    person.phone_pers,
                    person.address_pers,
                    person.num_address,
                    person.bairro_pers,
                    person.fk_cep,
                    person.fk_name_filial,
                    person.rg,
                    person.cnpj,
                    person.inscricao,
                    person.fantasia,
                    person.limit_cred,
                    person.fk_grupo,
                    person.id,
                    person.date_of_birth,
                    person.age
                ];
                yield postgreSQL_1.postgreSQL.query(query, values);
            }
            catch (err) {
                return new PersonDAO().errors(err);
            }
        });
    }
}
exports.PersonDAO = PersonDAO;
PersonDAO.table = "persons";
