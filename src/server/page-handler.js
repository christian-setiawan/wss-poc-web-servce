const getHomePage = async (request, h) => {
  
  const data = {
    ENV: {
      AuthService_BaseURL: process.env.AUTH_SERVICE_BASE_URL
    },
  }

  return h.view('home/home.ejs', data);
};

module.exports = [
  getHomePage,
];