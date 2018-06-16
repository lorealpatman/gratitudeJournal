const responses = require("../models/responses");
const usersService = require("../services/users.service");
const apiPrefix = "/api/users";

module.exports = {
  getAll: getAll,
  // getUserById: getUserById,
  post: post,
  put: put,
  delete: _delete
};

function getAll(req, res) {
  usersService
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

function post(req, res) {
  usersService
    .post(req.body)
    .then(id => {
      const responseModel = new responses.ItemResponse();
      responseModel.item = id;
      res
        .status(201)
        .location(`${apiPrefix}/${id}`)
        .json(responseModel);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(new responses.ErrorResponse(err));
    });
}
