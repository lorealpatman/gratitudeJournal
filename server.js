const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const MongoClient = require("mongodb");
const assert = require("assert");
const dotenv = require("dotenv");

const app = express();
const quoteScraper = require("../simpleApp/app/services/QuoteScraper");
dotenv.config();

const password = process.env.MLAB_PASSWORD;
const userName = process.env.MLAB_USER;

const corsConfig = {
  origin: "http://localhost:3000",
  methods: "GET,PUT,POST,DELETE",
  credentials: true,
  allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Cookie",
  preflightContinue: false,
  optionsSuccessStatus: 204
};

const port = 3001;
const mongoUrl = `mongodb://${userName}:${password}@ds056009.mlab.com:56009/c52crud`;
let dbName = "c52crud";

MongoClient.connect(
  mongoUrl,
  function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to mongodb");

    db = client.db(dbName);
  }
);

app.use(cors(corsConfig));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//Add more routers here
app.get("/api/users", (req, res) => {
  db.collection("users")
    .find()
    .toArray()
    .then(result => {
      res.status(200).json(result);
    });
});

app.post("/api/users", (req, res) => {
  db.collection("users")
    .insertOne(req.body)
    .then(result => {
      const id = result.insertedId.toString();
      res.status(201).json({ id: id });
    })
    .catch(err => {
      res.status(500).send(err.message);
    });
});

app.get("/api/quotes", (req, res) => {
  quoteScraper.getAll().then(result => {
    res.status(200).json(result);
  });
});

// app.use(router);
app.use((req, res) => {
  console.log(req);
  res.sendStatus(404);
});

app.listen(port, () => console.log(`Magic happens on port ${port}`));
