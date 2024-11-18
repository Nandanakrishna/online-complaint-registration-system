const mongoose = require("mongoose");

// Updated connection string with `mongodb+srv://` format
mongoose.connect("mongodb+srv://nandana:BTSARMYforever0@myatlasclusteredu.wlskb.mongodb.net/", {
  useNewUrlParser: true,    // Ensures use of the latest connection string parser
  useUnifiedTopology: true,  // Enables the new connection management engine
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error.message);
  });
