"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = void 0;
const mongoose_1 = require("mongoose");
exports.Location = (0, mongoose_1.model)('location', new mongoose_1.Schema({
    coord: String,
    distance: String,
    time: String,
    routes: {
        type: [{
                lat: Number,
                long: Number
            }]
    }
}));
