"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../configs/env");
function AuthMiddleware(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ error: 'Missing authorization header' });
    }
    const token = authorization.replace(/(bearer|Bearer)/, '').trim();
    try {
        const data = jsonwebtoken_1.default.verify(token, env_1.JWT_SECRET_KEY);
        const { user_id } = data;
        req.userId = user_id;
        return next();
    }
    catch (_a) {
        return res.status(401).json({ error: 'Missing authorization header' });
    }
}
exports.AuthMiddleware = AuthMiddleware;
