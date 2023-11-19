"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissingParams = void 0;
class MissingParams extends Error {
    constructor(...params) {
        super();
        this.name = 'Missing Params - status_code=400';
        this.message = `Missing one or more Params: ${params.join(', ')}`;
    }
    api() {
        return { error: this.message };
    }
}
exports.MissingParams = MissingParams;
