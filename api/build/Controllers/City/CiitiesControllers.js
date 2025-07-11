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
exports.CitiesControllers = void 0;
const postgreSQL_1 = require("../../Providers/Storages/pg/postgreSQL");
class CitiesControllers {
    select(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield postgreSQL_1.postgreSQL.query("SELECT * FROM cities");
                response.json(res.rows);
            }
            catch (err) {
                console.log("Error Ocurred ! " + err);
            }
        });
    }
    ;
    selectOnCity(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = request.params;
                const res = yield postgreSQL_1.postgreSQL.query("SELECT name_city FROM cities WHERE id_city = '" + id + "' LIMIT(1)");
                response.json(res.rows[0]);
            }
            catch (err) {
                response.json("Error Occurred !!" + err);
            }
        });
    }
    ;
}
exports.CitiesControllers = CitiesControllers;
