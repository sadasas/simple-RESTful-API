import { error } from "console";
import express from "express";
import http from "http";
import conn from "./db/conn";
import Logging from "./library/logging";
import userRouter from "./routes/user";
import { config } from "./config/config";

const router = express();

conn
  .then(() => {
    Logging.info("connect");
    startServer();
  })
  .catch((eror) => {
    Logging.err("unable to connect");
  });

const startServer = () => {
  router.use((req, res, next) => {
    ///log on request
    Logging.info(
      `Incoming ::: Method:[${req.method}] ----url:[${req.url}] -----IP:[${req.socket.remoteAddress}]`
    );

    ///log on response
    req.on("finish", () => {
      Logging.info(
        `Incoming ::: Method:[${req.method}] ----url:[${req.url}] -----IP:[${req.socket.remoteAddress}] ------Status:[${req.statusCode}]`
      );
    });

    next();
  });

  router.use(express.json());

  //routes
  router.use("/users", userRouter);

  router.use((req, res, next) => {
    const error = new Error("not found");
    Logging.err(error);

    return res.status(404).json({ message: error.message });
  });

  http
    .createServer(router)
    .listen(config.server.port, () => Logging.info("server is running"));
};
