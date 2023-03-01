import dotenv from "dotenv";

dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME || "";
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "";
const MONGO_URL = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@ac-lnkbmdn-shard-00-00.fjv4zes.mongodb.net:27017,ac-lnkbmdn-shard-00-01.fjv4zes.mongodb.net:27017,ac-lnkbmdn-shard-00-02.fjv4zes.mongodb.net:27017/?ssl=true&replicaSet=atlas-jv2wx0-shard-0&authSource=admin`;

const SERVER_PORT = process.env.SERVER_PORT
  ? Number(process.env.SERVER_PORT)
  : 1500;

export const config = {
  mongo: {
    url: MONGO_URL,
  },
  server: {
    port: SERVER_PORT,
  },
};
