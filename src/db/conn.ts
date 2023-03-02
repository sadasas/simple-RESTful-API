import mongoose from "mongoose";
import { config } from "../config/config";

let conn = mongoose.connect(config.mongo.url, {
  retryWrites: true,
  w: "majority",
});

export default conn;
