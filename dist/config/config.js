"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGO_USERNAME = process.env.MONGO_USERNAME || "";
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "";
const MONGO_URL = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@ac-lnkbmdn-shard-00-00.fjv4zes.mongodb.net:27017,ac-lnkbmdn-shard-00-01.fjv4zes.mongodb.net:27017,ac-lnkbmdn-shard-00-02.fjv4zes.mongodb.net:27017/?ssl=true&replicaSet=atlas-jv2wx0-shard-0&authSource=admin`;
const SERVER_PORT = process.env.SERVER_PORT
    ? Number(process.env.SERVER_PORT)
    : 1500;
exports.config = {
    mongo: {
        url: MONGO_URL,
    },
    server: {
        port: SERVER_PORT,
    },
};
//# sourceMappingURL=config.js.map