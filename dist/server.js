"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config/config");
const logging_1 = __importDefault(require("./library/logging"));
const user_1 = require("./routes/user");
const router = (0, express_1.default)();
mongoose_1.default
    .connect(config_1.config.mongo.url, {
    retryWrites: true,
    w: "majority",
})
    .then(() => {
    logging_1.default.info("connect");
    startServer();
})
    .catch((eror) => {
    logging_1.default.err("unable to connect");
});
const startServer = () => {
    router.use((req, res, next) => {
        ///log on request
        logging_1.default.info(`Incoming ::: Method:[${req.method}] ----url:[${req.url}] -----IP:[${req.socket.remoteAddress}]`);
        ///log on response
        req.on("finish", () => {
            logging_1.default.info(`Incoming ::: Method:[${req.method}] ----url:[${req.url}] -----IP:[${req.socket.remoteAddress}] ------Status:[${req.statusCode}]`);
        });
        next();
    });
    router.use(express_1.default.json());
    //routes
    router.use("/users", user_1.router);
    router.use((req, res, next) => {
        const error = new Error("not found");
        logging_1.default.err(error);
        return res.status(404).json({ message: error.message });
    });
    http_1.default
        .createServer(router)
        .listen(config_1.config.server.port, () => logging_1.default.info("server is running"));
};
//# sourceMappingURL=server.js.map