"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeRefreshToken = void 0;
const express_1 = require("express");
const RefreshTokenUserController_1 = require("../Authenticate/refreshTokenUser/RefreshTokenUserController");
const routeRefreshToken = (0, express_1.Router)();
exports.routeRefreshToken = routeRefreshToken;
const refreshTokenUserController = new RefreshTokenUserController_1.RefreshTokenUserController();
routeRefreshToken.post("/refresh_token", refreshTokenUserController.handle);
