"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeNotaRecebidas = void 0;
const express_1 = require("express");
const NotaRecebidaControllers_1 = require("../Controllers/NotaRecebida/NotaRecebidaControllers");
const routeNotaRecebidas = (0, express_1.Router)();
exports.routeNotaRecebidas = routeNotaRecebidas;
const notaRecebidaControllers = new NotaRecebidaControllers_1.NotaRecebidaControllers();
routeNotaRecebidas.post('/registrar_nota_recebida', notaRecebidaControllers.registerNotaRecebida);
