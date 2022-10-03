const express = require("express");
const { signin, signup, getUsers } = require("../controllers/user");

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/", getUsers);

module.exports = router;
