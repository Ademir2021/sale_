"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeContabilidades = void 0;
const express_1 = require("express");
const ContabilidadeControllers_1 = require("../Controllers/Contabilidade/ContabilidadeControllers");
const routeContabilidades = (0, express_1.Router)();
exports.routeContabilidades = routeContabilidades;
const contabilidadeControllers = new ContabilidadeControllers_1.ContabilidadeControllers();
routeContabilidades.get('/classes_prods', contabilidadeControllers.findAllClassesProds);
routeContabilidades.get('/tipos_prods', contabilidadeControllers.findAllTiposProds);
routeContabilidades.get('/grupos_fiscais', contabilidadeControllers.findAllGruposFiscais);
