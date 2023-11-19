"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Incident = void 0;
const mongoose_1 = require("mongoose");
exports.Incident = (0, mongoose_1.model)('Incident', new mongoose_1.Schema({
    category_animal: {
        type: String,
        required: true,
        enum: ['domestico', 'gado', 'silvestre', 'selvagens'],
    },
    status: {
        type: String,
        required: true,
        enum: ['ongoing', 'canceled', 'done'],
        default: 'ongoing'
    },
    longitude_latitude: {
        type: String,
        required: true,
    },
    animal_size: {
        type: String,
        required: true,
        enum: ['mini', 'pequeno', 'medio', 'grande', 'gigante']
    },
    animal_lost: {
        type: Boolean,
        required: true,
    },
    adopt: {
        type: Boolean,
        required: true,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    ong: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'Ong'
    },
}));
