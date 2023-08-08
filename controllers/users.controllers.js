const Users = require("../models/user.model");
const mongoose = require("mongoose");

exports.helloWorld = (req, res) => {
  res.send({
    message: "hello world",
  });
};

exports.getAllUsers = (req, res) => {
  try {
    Users.find()
      .then((data) => {
        res.status(200).send({
          message: "Users have been retrieved successfully",
          data: data,
        });
      })
      .catch((error) => {
        return res.status(400).send({
          message: "Error while retrieving Users data.",
          error: error,
        });
      });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error: error,
    });
  }
};

exports.getUserById = (req, res) => {
  try {
    const userId = req.params.userId;
    Users.findOne({ _id: new mongoose.Types.ObjectId(userId) })
      .then((data) => {
        if (!data) {
          return res.status(200).send({
            message: "No User found with the given Id",
          });
        }
        res.status(200).send({
          message: "User has been retrieved successfully",
          data: data,
        });
      })
      .catch((error) => {
        return res.status(400).send({
          message: "Error while retrieving User data.",
          error: error,
        });
      });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).send({
      message: "Internal Server Error",
      error: error,
    });
  }
};

exports.addUser = (req, res) => {
  try {
    const payload = req.body;

    const newUser = new Users(payload);

    newUser
      .save()
      .then((data) => {
        res.status(200).send({
          message: "User has been added successfully",
          data: data,
        });
      })
      .catch((error) => {
        return res.status(400).send({
          message: "Error while adding a new user.",
          error: error,
        });
      });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error: error,
    });
  }
};

exports.updateUser = (req, res) => {
  try {
    const userId = req.params.userId;

    const payload = req.body;

    Users.findByIdAndUpdate(
      { _id: new mongoose.Types.ObjectId(userId) },
      { $set: { ...payload } }
    )
      .then((data) => {
        res.status(200).send({
          message: "User has been updated successfully",
          userId: data._id,
        });
      })
      .catch((error) => {
        return res.status(400).send({
          message: "Error while updating an user.",
          error: error,
        });
      });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).send({
      message: "Internal Server Error",
      error: error,
    });
  }
};

exports.deleteUserById = (req, res) => {
  try {
    const userId = req.params.userId;

    Users.deleteOne({ _id: new mongoose.Types.ObjectId(userId) })
      .then((data) => {
        res.status(200).send({
          message: "User has been deleted successfully",
          data: data,
        });
      })
      .catch((error) => {
        return res.status(400).send({
          message: "Error while deleting an user.",
          error: error,
        });
      });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error: error,
    });
  }
};

exports.deleteAllUsers = (req, res) => {
  try {
    Users.deleteMany()
      .then((data) => {
        res.status(200).send({
          message: "Users have been deleted successfully",
          data: data,
        });
      })
      .catch((error) => {
        return res.status(400).send({
          message: "Error while deleting users.",
          error: error,
        });
      });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error: error,
    });
  }
};
