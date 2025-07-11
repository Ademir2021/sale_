"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerAutheticate = void 0;
const express_1 = require("express");
const Authenticate_1 = require("../Authenticate/Authenticate");
const routerAutheticate = (0, express_1.Router)();
exports.routerAutheticate = routerAutheticate;
const authenticateJwt = new Authenticate_1.AuthenticateJwt();
routerAutheticate.post("/auth", authenticateJwt.handleJwt);
