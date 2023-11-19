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
exports.getPlaceDetails = void 0;
const googleMaps_1 = require("../../../configs/api/googleMaps");
function getPlaceDetails(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { place_id } = req.query;
        if (!place_id) {
            return res.status(400).json({ error: 'Missing query place_id' });
        }
        const { data: { results: placeDetails } } = yield googleMaps_1.googleMapsApi.get('/place/details/json', {
            params: {
                place_id
            }
        });
        res.json(placeDetails);
    });
}
exports.getPlaceDetails = getPlaceDetails;
