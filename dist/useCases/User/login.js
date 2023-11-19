"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const _400_1 = require("../../errors/statusCode/400");
const UserRepository_1 = require("../../repositories/UserRepository");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../../configs/env");
function loginUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        if (!email || !password) {
            const paramsMissed = new _400_1.MissingParams('name', 'email');
            return res.status(400).json(paramsMissed.api());
        }
        const user = yield UserRepository_1.UserRepository.findByCredentials(email, password);
        if (!user) {
            return res.status(401).json({ error: 'Email or password is invalid' });
        }
        const token = jsonwebtoken_1.default.sign({ user_id: user._id }, env_1.JWT_SECRET_KEY, {
            expiresIn: '1d'
        });
        res.json({
            user,
            token
        });
    });
}
exports.loginUser = loginUser;
