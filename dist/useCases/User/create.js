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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const _400_1 = require("../../errors/statusCode/400");
const crypt_1 = require("../../core/utils/crypt");
const UserRepository_1 = require("../../repositories/UserRepository");
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            const paramsMissed = new _400_1.MissingParams('name', 'email', 'password');
            return res.status(400).json(paramsMissed.api());
        }
        const passwordHashed = yield crypt_1.Crypt.hash(password);
        const newUser = {
            name: name,
            email: email,
            password: passwordHashed,
        };
        const user = yield UserRepository_1.UserRepository.create(newUser);
        if (!user) {
            return res.status(409).json({ error: 'Esse Email já existe' });
        }
        res.json(user);
    });
}
exports.createUser = createUser;
