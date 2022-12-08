import { fastify } from "fastify";
import pino from "pino";
import postRoute from "../routes/post";
const Port = process.env.PORT || 7000;
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/blogs";
const server = fastify({
  logger: pino({ level: "info" }),
});

server.register(postRoute, { prefix: "/post" });
// register plugin below:
const start = async () => {
  try {
    await server.listen(3001);
    console.log("Server started successfully");
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
