const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send({
    message: "hello world",
  });
});

router.get("/products", (req, res) => {
  res.status(200).send({
    message: "Users have been retrieved successfully",
  });
});

router.post("/products", (req, res) => {
  const payload = req.body;
  res.status(201).send({
    message: "User has been added successfully.",
  });
});

router.get("/products/:userId", (req, res) => {
  const userId = req.params.userId;

  res.status(200).send({
    message: `User with id ${userId} has been retrieved successfully.`,
  });
});

router.put("/products/:userId", (req, res) => {
  const userId = req.params.userId;

  const payload = req.body;

  res.status(200).send({
    message: "User has been updated successfully.",
  });
});

router.delete("/products/:userId", (req, res) => {
  const userId = req.params.userId;

  res.status(200).send({
    message: "User has been deleted successfully.",
  });
});

router.delete("/products", (req, res) => {
  res.status(200).send({
    message: "Users have been deleted successfully.",
  });
});

module.exports = router;
