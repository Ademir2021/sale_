"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const UserDAO_1 = require("./UserDAO");
class User extends UserDAO_1.UserDAO {
    constructor(id, name, username, password, privilege) {
        super();
        this.username = '';
        this.password = '';
        this.privilege = 0;
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
        this.privilege = privilege;
    }
    getId() {
        if (this.id < 1)
            return "ID:" + this.id + " não pode ser menor que 1";
        if (this.id > 0)
            return "ID:" + this.id + " ID válido";
    }
    ;
    setId(id) {
        this.id = id;
    }
    ;
    getName() {
        if (this.name === "Joao")
            return "Seu nome:" + this.name + " não pode ser este";
        if (this.name !== "Joao")
            return "Seu Nome:" + this.name + " é válido";
    }
    ;
    setName(name) {
        this.name = name;
    }
    ;
}
exports.User = User;
