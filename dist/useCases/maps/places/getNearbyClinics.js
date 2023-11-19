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
exports.getNearbyClinics = void 0;
const googleMaps_1 = require("../../../configs/api/googleMaps");
function getNearbyClinics(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { lat, lng } = req.query;
        if (!lat || !lng) {
            return res.status(400).json({ error: 'Missing query lat and lng' });
        }
        const clientLocation = `${lat}, ${lng}`;
        const { data: { results: rawPlaces } } = yield googleMaps_1.googleMapsApi.get('/place/nearbysearch/json', {
            params: {
                location: clientLocation,
                type: 'veterinary_care|pet_store',
                radius: 5000,
                opennow: '1'
            }
        });
        function distanceMatrix(destination, origin) {
            return __awaiter(this, void 0, void 0, function* () {
                const { data: distance } = yield googleMaps_1.googleMapsApi.get('/distancematrix/json', {
                    params: {
                        origins: origin,
                        destinations: destination
                    }
                });
                return {
                    distanceLength: distance.rows[0].elements[0].distance.text
                };
            });
        }
        const places = yield Promise.all(rawPlaces.map((place) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const placeLocation = `${place.geometry.location.lat}, ${place.geometry.location.lng}`;
            const { distanceLength } = yield distanceMatrix(placeLocation, clientLocation);
            return {
                id: place.place_id,
                name: place.name,
                images: place.photos,
                rating: place.rating,
                location: placeLocation,
                distanceLength,
                isOpen: (_a = place === null || place === void 0 ? void 0 : place.opening_hours) === null || _a === void 0 ? void 0 : _a.open_now
            };
        })));
        res.json(places);
    });
}
exports.getNearbyClinics = getNearbyClinics;
