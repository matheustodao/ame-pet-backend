"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ong = void 0;
const mongoose_1 = require("mongoose");
exports.Ong = (0, mongoose_1.model)('Ong', new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    cnpj: {
        type: String,
        required: true,
    },
    longitude_latitude: {
        type: String,
        required: true,
    },
}));
