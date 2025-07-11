"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerCaixaMovs = void 0;
const express_1 = require("express");
const CaixaMovControllers_1 = require("../Controllers/CaixaMov/CaixaMovControllers");
const routerCaixaMovs = (0, express_1.Router)();
exports.routerCaixaMovs = routerCaixaMovs;
const caixaMovControllers = new CaixaMovControllers_1.CaixaMovControllers();
routerCaixaMovs.post('/caixa_movs', caixaMovControllers.listCaixaMovs);
