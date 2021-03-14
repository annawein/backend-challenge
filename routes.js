const express = require("express");
const Controller = require("./controllers/Controller");

const routes = express.Router();

routes.post("/short", Controller.index);


module.exports = routes;