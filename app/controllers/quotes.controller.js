const responses = require("../models/responses");
const quotesService = require("../app/services/QuoteScraper");
const apiPrefix = "/api/users";

module.exports = {
  getAll: getAll
};

function getAll(req, res) {
  quotesService
    .getAll()
    .then(users => {
      const responseModel = new responses.ItemsResponse();
      responseModel.items = users;
      res.json(responseModel); // 200 Response
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(new responses.ErrorResponse(err));
    });
}
