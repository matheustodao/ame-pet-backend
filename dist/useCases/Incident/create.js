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
exports.createIncident = void 0;
const IncidentRepository_1 = require("../../repositories/IncidentRepository");
function createIncident(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { adopt, longitude_latitude, animal_lost, animal_size, category_animal, ongId, userId, status } = req.body;
        const incidentCreated = yield IncidentRepository_1.IncidentRepository.create({
            adopt: adopt === '1' ? true : false,
            animal_lost: animal_lost === '1' ? true : false,
            longitude_latitude,
            animal_size,
            category_animal,
            status,
            ong: ongId,
            user: userId,
        });
        const incident = yield IncidentRepository_1.IncidentRepository.findByUserId(userId);
        res.json(incident);
    });
}
exports.createIncident = createIncident;
