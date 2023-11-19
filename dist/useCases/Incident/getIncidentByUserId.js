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
exports.getIncidentByUserId = void 0;
const IncidentRepository_1 = require("../../repositories/IncidentRepository");
const _400_1 = require("./../../errors/statusCode/400");
function getIncidentByUserId(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        if (!id) {
            return res.json(new _400_1.MissingParams('userId').api());
        }
        const incident = yield IncidentRepository_1.IncidentRepository.findByUserId((_a = req.userId) !== null && _a !== void 0 ? _a : id);
        res.json(incident);
    });
}
exports.getIncidentByUserId = getIncidentByUserId;
