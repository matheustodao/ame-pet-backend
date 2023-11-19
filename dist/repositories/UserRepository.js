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
exports.UserRepository = exports.UserRepositoryClass = void 0;
const user_1 = require("./../model/user");
const RepositoryError_1 = require("../errors/RepositoryError");
const crypt_1 = require("../core/utils/crypt");
class UserRepositoryClass {
    create(props) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const emailAlreadyExists = yield this.findByEmail(props.email);
                if (emailAlreadyExists) {
                    return null;
                }
                const user = yield user_1.User.create({
                    name: props.name,
                    email: props.email,
                    password: props.password
                });
                return user;
            }
            catch (err) {
                throw new RepositoryError_1.RepositoryError('create:user', err);
            }
        });
    }
    show(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userExists = yield user_1.User.findById(userId);
                return userExists;
            }
            catch (err) {
                throw new RepositoryError_1.RepositoryError('show:user', err);
            }
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userFound = yield user_1.User.findOne({ email });
                if (!userFound) {
                    return null;
                }
                return userFound;
            }
            catch (err) {
                throw new RepositoryError_1.RepositoryError('findById:user', err);
            }
        });
    }
    findByCredentials(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userFound = yield this.findByEmail(email);
                if (userFound === null)
                    return null;
                const validCredentials = yield crypt_1.Crypt.compare(password, userFound.password);
                if (!validCredentials) {
                    return null;
                }
                return userFound;
            }
            catch (err) {
                throw new RepositoryError_1.RepositoryError('findByCredentials:user', err);
            }
        });
    }
}
exports.UserRepositoryClass = UserRepositoryClass;
exports.UserRepository = new UserRepositoryClass();
