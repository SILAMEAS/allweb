async function post(fastify, option) {
  fastify.get("/", (request, response) => {
    return "hello from route in posts";
  });
}

export default post;
