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
exports.IncidentRepository = exports.IncidentRepositoryClass = void 0;
const RepositoryError_1 = require("../errors/RepositoryError");
const incident_1 = require("../model/incident");
class IncidentRepositoryClass {
    create(props) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield incident_1.Incident.create({
                    adopt: props.adopt,
                    animal_lost: props.animal_lost,
                    animal_size: props.animal_size,
                    category_animal: props.category_animal,
                    ong: props.ong,
                    user: props.user,
                    longitude_latitude: props.longitude_latitude,
                });
                return user;
            }
            catch (err) {
                throw new RepositoryError_1.RepositoryError('create:incident', err);
            }
        });
    }
    show(incidentId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userExists = yield incident_1.Incident.findById(incidentId).populate('user').populate('ong');
                return userExists;
            }
            catch (err) {
                throw new RepositoryError_1.RepositoryError('show:incident', err);
            }
        });
    }
    findByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const multiplesIncidents = yield incident_1.Incident.find()
                    .where({
                    user: userId,
                    status: 'ongoing'
                })
                    .populate('user')
                    .populate('ong');
                const recentIncidentOngoing = multiplesIncidents[(multiplesIncidents === null || multiplesIncidents === void 0 ? void 0 : multiplesIncidents.length) - 1];
                return recentIncidentOngoing;
            }
            catch (err) {
                throw new RepositoryError_1.RepositoryError('get:incident by user id', err);
            }
        });
    }
    updateStatus(incidentId, status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updated = yield incident_1.Incident.findOneAndUpdate({
                    _id: incidentId
                }, { status }, { new: true });
                return updated;
            }
            catch (err) {
                throw new RepositoryError_1.RepositoryError('updateStatus:incident', err);
            }
        });
    }
}
exports.IncidentRepositoryClass = IncidentRepositoryClass;
exports.IncidentRepository = new IncidentRepositoryClass();
