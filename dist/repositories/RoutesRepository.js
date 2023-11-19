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
exports.RoutesRepository = void 0;
const routes_1 = require("../model/routes");
exports.RoutesRepository = {
    show: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { lat, long } = req.query;
        console.log(`${lat},${long}`);
        const location = yield routes_1.Location.findOne({ coord: `${lat},${long}` });
        return res.json(location);
    })
};
