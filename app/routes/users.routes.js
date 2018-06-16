const router = require("express").Router();
const usersController = require("../controllers/users.controller");
const user = require("../models/user");

module.exports = router;

// api routes ===========================================================

router.get("/", usersController.getAll);
router.post("/", usersController.post);
router.put("/:id([0-9a-fA-F]{24})", usersController.put);
router.delete("/:id([0-9a-fA-F]{24})", usersController.delete);
