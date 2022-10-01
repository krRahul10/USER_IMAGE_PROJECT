const mongoose = require("mongoose");

// const DB =
//   "mongodb+srv://Octopus:octopus@cluster0.fmfphvh.mongodb.net/ImageUpload?retryWrites=true&w=majority";

mongoose
  .connect(process.env.DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DATABASE connection with Atlas");
  })
  .catch((err) => console.log("error", err.message));
