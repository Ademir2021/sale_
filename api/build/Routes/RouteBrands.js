"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeBrands = void 0;
const express_1 = require("express");
const BrandControllers_1 = require("../Controllers/Brand/BrandControllers");
const routeBrands = (0, express_1.Router)();
exports.routeBrands = routeBrands;
const brandsControllers = new BrandControllers_1.BrandsControllers();
routeBrands.get('/brands', brandsControllers.findAll);
