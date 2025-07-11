"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = ensureAuthenticated;
const jsonwebtoken_1 = require("jsonwebtoken");
function ensureAuthenticated(request, response, next) {
    const authToken = request.headers.authorization;
    if (!authToken) {
        return response.status(401).json({
            message: "Token is missing"
        });
    }
    const [, token] = authToken.split(" ");
    try {
        (0, jsonwebtoken_1.verify)(token, "0103adcc-3d80-45f6-a2b3-9425aeff7ce7");
        return next();
    }
    catch (err) {
        return response.status(401).json({
            message: "Token invalid"
        });
    }
}
