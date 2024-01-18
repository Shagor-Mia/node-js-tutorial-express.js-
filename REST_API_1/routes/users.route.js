const {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controllers");

const router = require("express").Router();

router.get("/", getAllUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
