"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function post(fastify, option) {
    fastify.get("/", (request, response) => {
        return "hello from route in posts";
    });
}
exports.default = post;
