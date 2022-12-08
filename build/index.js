"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = require("fastify");
const pino_1 = __importDefault(require("pino"));
const post_1 = __importDefault(require("../routes/post"));
const Port = process.env.PORT || 7000;
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/blogs";
const server = (0, fastify_1.fastify)({
    logger: (0, pino_1.default)({ level: "info" }),
});
server.register(post_1.default, { prefix: "/post" });
// register plugin below:
const start = async () => {
    try {
        await server.listen(3001);
        console.log("Server started successfully");
    }
    catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};
start();
