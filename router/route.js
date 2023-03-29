const express = require("express");
const {
  register,
  login,
  updateData,
  deleteData,
} = require("../controller/controller");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.put("/updateData", updateData);
router.delete("/deleteData", deleteData);

module.exports = router;
