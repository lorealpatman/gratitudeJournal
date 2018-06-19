const router = require("express").Router();
const quotesController = require("../controllers/quotes.controller");

module.exports = router;

// api routes ===========================================================

router.get("/", quotesController.getAll);
