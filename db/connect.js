const mongoose = require("mongoose");

exports.db = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://farookjintha:Welcome123@myshoppingcart.pzuzaff.mongodb.net/MyShoppingApp"
    );
    console.log("DB is connected");
  } catch (error) {
    console.log("Error while connecting DB: ", error);
  }
};
