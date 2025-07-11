"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeSectors = void 0;
const express_1 = require("express");
const SectorControllers_1 = require("../Controllers/Sector/SectorControllers");
const routeSectors = (0, express_1.Router)();
exports.routeSectors = routeSectors;
const sectorconttrollers = new SectorControllers_1.SectorConttrollers();
routeSectors.get('/sectors', sectorconttrollers.findAll);
