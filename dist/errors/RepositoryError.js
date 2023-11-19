"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryError = void 0;
class RepositoryError extends Error {
    constructor(errorLocal, err) {
        super(),
            this.name = 'Repository Error';
        this.message = `Something wrong in ${errorLocal}: ${err}`;
    }
}
exports.RepositoryError = RepositoryError;
