const express = require("express");
const {
  helloWorld,
  getAllUsers,
  addUser,
  getUserById,
  updateUser,
  deleteUserById,
  deleteAllUsers,
} = require("../controllers/users.controllers");

const router = express.Router();

router.get("/", helloWorld);

router.get("/users", getAllUsers);

router.post("/users", addUser);

router.get("/users/:userId", getUserById);

router.put("/users/:userId", updateUser);

router.delete("/users/:userId", deleteUserById);

router.delete("/users", deleteAllUsers);

module.exports = router;
