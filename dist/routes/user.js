"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const user_js_1 = __importDefault(require("../controllers/user.js"));
exports.router = express_1.default.Router();
exports.router.post("/create", user_js_1.default.createUser);
exports.router.get("/get/:username", user_js_1.default.readUser);
//# sourceMappingURL=user.js.map