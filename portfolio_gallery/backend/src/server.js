"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
var port = 8000;
app.get('/', function (_, res) {
    res.status(200).send();
});
app.listen(port, function () { return console.log("Running on port ".concat(port)); });
