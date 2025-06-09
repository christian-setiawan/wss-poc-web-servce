const getHomePage = async (request, h) => {
  return h.view('home/home.ejs');
};

module.exports = [
  getHomePage,
];