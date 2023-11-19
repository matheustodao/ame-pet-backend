"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clinic = void 0;
const mongoose_1 = require("mongoose");
exports.Clinic = (0, mongoose_1.model)('Clinic', new mongoose_1.Schema({
    cnpj: {
        type: String,
        required: true,
    },
    brandName: {
        type: String,
        required: true,
    },
    legalName: {
        type: String,
        required: true,
    },
    address: {
        cep: {
            type: String,
            required: true,
        },
        neighborhood: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        number: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true
        }
    },
    responsible: {
        required: {
            name: {
                type: String,
            },
            occupation: {
                type: String,
            },
            cpf: {
                type: String,
            },
            email: {
                type: String,
            }
        }
    },
    services: [{
            name: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true
            }
        }],
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
    },
}));
