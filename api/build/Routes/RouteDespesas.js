"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeDespesas = void 0;
const express_1 = require("express");
const DespesasControllers_1 = require("../Controllers/Despesa/DespesasControllers");
const routeDespesas = (0, express_1.Router)();
exports.routeDespesas = routeDespesas;
const despesaControllers = new DespesasControllers_1.DespesaControllers();
routeDespesas.get('/despesas', despesaControllers.findAll);
