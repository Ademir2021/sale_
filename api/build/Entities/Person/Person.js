"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const PersonDAO_1 = require("./PersonDAO");
class Person extends PersonDAO_1.PersonDAO {
    constructor(id, name, date_of_birth, cpf_pers, phone_pers, address_pers, num_address, bairro_pers, fk_cep, fk_name_filial, fk_id_user, rg, cnpj, inscricao, fantasia, limit_cred, fk_grupo) {
        super();
        this.age = 0;
        this.cpf_pers = '0';
        this.phone_pers = '';
        this.address_pers = '';
        this.num_address = '0';
        this.bairro_pers = '';
        this.fk_cep = 0;
        this.fk_name_filial = 0;
        this.fk_id_user = 0;
        this.rg = '0';
        this.cnpj = '0';
        this.inscricao = '0';
        this.fantasia = '0';
        this.limit_cred = 0;
        this.fk_grupo = 0;
        this.id = id;
        this.name = name;
        this.date_of_birth = date_of_birth;
        this.age = this.calcularIdade(date_of_birth);
        this.cpf_pers = cpf_pers;
        this.phone_pers = phone_pers;
        this.address_pers = address_pers;
        this.num_address = num_address;
        this.bairro_pers = bairro_pers;
        this.fk_cep = fk_cep;
        this.fk_name_filial = fk_name_filial;
        this.fk_id_user = fk_id_user;
        this.rg = rg;
        this.cnpj = cnpj;
        this.inscricao = inscricao;
        this.fantasia = fantasia;
        this.limit_cred = limit_cred;
        this.fk_grupo = fk_grupo;
    }
    ;
    calcularIdade(dataNascimento) {
        const hoje = new Date();
        const nascimento = new Date(dataNascimento);
        let idade = hoje.getFullYear() - nascimento.getFullYear();
        const mesAtual = hoje.getMonth();
        const mesNascimento = nascimento.getMonth();
        if (mesAtual < mesNascimento ||
            (mesAtual === mesNascimento && hoje.getDate() < nascimento.getDate())) {
            idade--;
        }
        return idade;
    }
}
exports.Person = Person;
