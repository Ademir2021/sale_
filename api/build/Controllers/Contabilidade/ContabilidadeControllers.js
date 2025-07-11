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
exports.ContabilidadeControllers = void 0;
const DAO_1 = require("../../Entities/DAO/DAO");
class ContabilidadeControllers extends DAO_1.DAO {
    findAllClassesProds(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const classesProds = yield new ContabilidadeControllers().select('classes_prods', 'id_classe');
            response.json(classesProds);
        });
    }
    ;
    findAllTiposProds(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const tiposProds = yield new ContabilidadeControllers().select('tipos_prods', 'id_tipo');
            response.json(tiposProds);
        });
    }
    ;
    findAllGruposFiscais(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const gruposFiscais = yield new ContabilidadeControllers().select('grupos_fiscais', 'id_grupo_fiscal');
            response.json(gruposFiscais);
        });
    }
    ;
}
exports.ContabilidadeControllers = ContabilidadeControllers;
;
