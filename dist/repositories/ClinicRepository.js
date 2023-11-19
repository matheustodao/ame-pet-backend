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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClinicRepository = void 0;
const RepositoryError_1 = require("../errors/RepositoryError");
const clinic_1 = require("../model/clinic");
class ClinicRepositoryClass {
    createService(props) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const service = yield clinic_1.Clinic.create({
                    services: {
                        name: props.name,
                        price: props.price
                    }
                });
                return service;
            }
            catch (err) {
                throw new RepositoryError_1.RepositoryError('create:clinic', err);
            }
        });
    }
    create(_a) {
        var { userId } = _a, props = __rest(_a, ["userId"]);
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clinic = yield clinic_1.Clinic.create({
                    userId,
                    cnpj: props.cnpj,
                    brandName: props.brandName,
                    legalName: props.legalName,
                    responsible: props.responsible,
                    address: props.address
                });
                return clinic;
            }
            catch (err) {
                throw new RepositoryError_1.RepositoryError('createUser:clinic', err);
            }
        });
    }
}
exports.ClinicRepository = new ClinicRepositoryClass();
