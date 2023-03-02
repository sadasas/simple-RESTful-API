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
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("../models/user"));
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const user = new user_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        username,
        password,
    });
    return user
        .save()
        .then((user) => res.status(201).json({ user }))
        .catch((error) => res.status(500).json({ user }));
});
const readUser = (req, res, next) => {
    const username = req.params.username;
    return user_1.default.findOne({ username: username })
        .then((user) => user
        ? res.status(200).json({ user })
        : res.status(404).json({ message: username }))
        .catch((error) => res.status(500).json({ error }));
};
exports.default = { createUser, readUser };
//# sourceMappingURL=user.js.map