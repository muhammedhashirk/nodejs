function Response(status, data) {
    this.status = status;
    this.data = data;
  };

Response.success = (data) => {
  return new Response("Success", data)
};

Response.failure = (data) => {
  return new Response("Failure", data)
};

module.exports = Response;