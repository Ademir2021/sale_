"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ContabilidadeControllers_1 = require("../Controllers/Contabilidade/ContabilidadeControllers");
const routeContabilidade = (0, express_1.Router)();
const contabilidadeControllers = new ContabilidadeControllers_1.ContabilidadeControllers();
