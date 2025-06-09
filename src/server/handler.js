const getRootHandler = async (request, h) => {
  const response = h.response({
    message: 'Welcome to the API',
    status: 'success',
  });

  response.code(200);

  return response;
}

/**
 * POST Register User Handler
 * 1) Validate Parameters
 * 2) Check if User Exists
 * 3) Create User
 * 4) Build Response
 */
postRegisterUserHandler = async (request, h) => {
    // 1)
    const { username, password } = request.payload;

    // 2)

    // 3)

    // 4)
    const response = h.response({
        message: 'User registered successfully',
        data: {
           refreshToken: 'sample_refresh_token', 
        },
        status: 'success',
    });
    
    response.code(201);
    
    return response;
}

module.exports = [
    getRootHandler, postRegisterUserHandler
];