const getRootHandler = async (h, req) => {
  const response = h.response({
    message: 'Welcome to the API',
    status: 'success',
  });

  response.code(200);

  return response;
}

module.exports = [
    getRootHandler
];