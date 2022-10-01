const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DATABASE connection with Atlas");
  })
  .catch((err) => console.log("error", err.message));
