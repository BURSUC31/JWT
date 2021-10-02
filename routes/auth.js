const router = require("express").Router();
const User = require("../models/User");
router.post("/register", (req, res) => {
  const user = new User("");
});

router.get("/", (req, res) => {
  res.send("Register");
});

router.post("/login", (req, res) => {
  res.send("Register");
});
module.exports = router;
