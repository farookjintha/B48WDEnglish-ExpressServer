require("dotenv").config();

const express = require("express");
const userRoutes = require("./routes/users.routes");
const productRoutes = require("./routes/products.routes");
const { db } = require("./db/connect");

const app = express();

//Connecting DB
db();

//Middleware ->req ->  stream of data -> json object
app.use(express.json());
app.use("/v1", userRoutes);
app.use("/v1", productRoutes);
// localhost:8000/users -> localhost:8000/v1/users
// localhost:8000/products -> localhost:8000/v1/products

app.listen(8001, () => {
  console.log(`App is running on PORT: 8001`);
});

// Install MongoDB and other dependencies (ORM) -> Mongoose
// Connect DB with Express App.
// Define the structure of your collections (SCHEMA)
// Create a model using that structure
// Use the model to perform CRUD
