"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleMapsApi = void 0;
const env_1 = require("./../env");
const axios_1 = __importDefault(require("axios"));
exports.googleMapsApi = axios_1.default.create({
    baseURL: 'https://maps.googleapis.com/maps/api',
    params: {
        key: env_1.API_KEY_GOOGLE_MAPS
    }
});
