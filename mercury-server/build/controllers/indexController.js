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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class IndexController {
    listUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM user_table', function (err, rows) {
                if (err)
                    throw err;
                const list = rows;
                res.json(rows);
            });
        });
    }
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("SELECT COUNT(*) FROM (SELECT * FROM user_table WHERE u_username = ? AND u_password = ?) AS con", [req.body.u_username, req.body.u_password], function (err, rows) {
                if (err)
                    throw err;
                const list = rows;
                res.json(rows);
            });
        });
    }
    addUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO user_table SET ?', [req.body]);
            res.json({
                message: "User account created"
            });
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM user_table WHERE u_username = ?', [id]);
            res.json({
                message: "User account '" + req.params.id + "' was deleted"
            });
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE user_table SET ? WHERE u_username = ?', [req.body, id]);
            res.json({
                message: "User info was updated: " + req.params.id
            });
        });
    }
}
const indexController = new IndexController();
exports.default = indexController;
