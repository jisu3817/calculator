"use strict"

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get('/', ctrl.output.hello);
// router.post('/calculate', ctrl.process.calculate);
module.exports = router;  