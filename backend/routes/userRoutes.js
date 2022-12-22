const express = require("express");
const { registerUser } = require("../controllers/userControllers.js");
const router = express.Router();

router.route("/").post((req, res) => {
  res(registerUser);
});

module.exports = router;
