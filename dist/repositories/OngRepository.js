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
exports.OngRepository = exports.OngRepositoryClass = void 0;
const RepositoryError_1 = require("../errors/RepositoryError");
const ong_1 = require("../model/ong");
class OngRepositoryClass {
    create(props) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield ong_1.Ong.create({
                    cnpj: props.cnpj,
                    longitude_latitude: props.longitude_latitude,
                    name: props.name
                });
                return user;
            }
            catch (err) {
                throw new RepositoryError_1.RepositoryError('create:ong', err);
            }
        });
    }
    show(ongId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const ongExists = yield ong_1.Ong.findById(ongId);
                return ongExists;
            }
            catch (err) {
                throw new RepositoryError_1.RepositoryError('show:ong', err);
            }
        });
    }
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const ong = yield ong_1.Ong.find();
                return ong;
            }
            catch (err) {
                throw new RepositoryError_1.RepositoryError('show:ong', err);
            }
        });
    }
}
exports.OngRepositoryClass = OngRepositoryClass;
exports.OngRepository = new OngRepositoryClass();
