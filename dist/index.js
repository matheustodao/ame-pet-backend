"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const mongoose_1 = __importDefault(require("mongoose"));
const router_1 = require("./router");
const app = (0, express_1.default)();
const dbInfo = {
    atlas: (_a = process.env.MONGO_URL) !== null && _a !== void 0 ? _a : '',
    urlDev: 'mongodb://localhost:27017'
};
mongoose_1.default.set('strictQuery', false);
mongoose_1.default.connect(dbInfo.atlas)
    .then(() => {
    var _a;
    const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use(router_1.router);
    app.listen(PORT);
})
    .catch((err) => console.error(`Mongo is failed: ${err}`));
