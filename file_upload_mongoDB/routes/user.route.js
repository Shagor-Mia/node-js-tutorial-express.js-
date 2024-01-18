const router = require("express").Router();

router.get("/", getAllUser);
router.get("/:id", getOneUser);
router.post("/", createUser);

module.exports = router;
