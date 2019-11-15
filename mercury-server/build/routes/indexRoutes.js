"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = __importDefault(require("../controllers/indexController"));
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.default.listUsers);
        this.router.get('/:id', indexController_1.default.getUser);
        this.router.post('/', indexController_1.default.addUser);
        this.router.delete('/:id', indexController_1.default.deleteUser);
        this.router.put('/:id', indexController_1.default.updateUser);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
