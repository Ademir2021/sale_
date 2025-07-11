"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeUniMeds = void 0;
const express_1 = require("express");
const UniMedControllers_1 = require("../Controllers/UniMed/UniMedControllers");
const routeUniMeds = (0, express_1.Router)();
exports.routeUniMeds = routeUniMeds;
const uniMedControllers = new UniMedControllers_1.UniMedControllers();
routeUniMeds.get('/un_meds', uniMedControllers.findAll);
