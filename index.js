const express = require("express");

const app = express();

//Middleware ->req ->  stream of data -> json object
app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    message: "hello world",
  });
});

// RETRIVE ALL USERS  -> (GET /users)
// ADD A NEW USER TO THE EXISTING USERS LIST -> ( POST /users/add )
// RETRIEVE A SINGLE USER (GET /users/:userId)
// UPDATE AN USER (PUT /users/:userId)
// DELETE AN USER (DELETE /users/:userId)
// DELETE ALL USERS (DELETE /users)

app.get("/users", (req, res) => {
  res.status(200).send({
    message: "Users have been retrieved successfully",
  });
});

app.post("/users", (req, res) => {
  const payload = req.body;
  res.status(201).send({
    message: "User has been added successfully.",
  });
});

app.get("/users/:userId", (req, res) => {
  const userId = req.params.userId;

  res.status(200).send({
    message: `User with id ${userId} has been retrieved successfully.`,
  });
});

app.put("/users/:userId", (req, res) => {
  const userId = req.params.userId;

  const payload = req.body;

  res.status(200).send({
    message: "User has been updated successfully.",
  });
});

app.delete("/users/:userId", (req, res) => {
  const userId = req.params.userId;

  res.status(200).send({
    message: "User has been deleted successfully.",
  });
});

app.delete("/users", (req, res) => {
  res.status(200).send({
    message: "Users have been deleted successfully.",
  });
});

app.get("/greetings/:userName", (req, res) => {
  console.log("Path Parameters/URL Paramters: ", req.params);

  console.log("Query Params/Search Params: ", req.query);
  res.send({
    message: "Happy Vacations!",
  });
});

app.post("/add", (req, res) => {
  const payload = req.body;

  //addition logic

  res.status(201).send({
    message: `Data has been inserted successfully.`,
    data: payload,
  });
});

app.delete("/deleteMessage", (req, res) => {
  res.send({
    message: "Message has been deleted successfully",
  });
});

app.put("/wishMe", (req, res) => {
  const payload = req.body;

  res.send({
    message: `Happy New Year, ${payload.name}!`,
  });
});

app.listen(8001, () => {
  console.log(`App is running on PORT: 8001`);
});

// req.body;

// parameters
// 1. path parameters
//   https://localhost:8001/users/:userId
//   https://localhost:8001/mobiles/1234
//   https://localhost:8001/users/110001

// 2. query/search parameters
//   https://localhost:8001/users?sortBy=name&order=desc&filter=50
