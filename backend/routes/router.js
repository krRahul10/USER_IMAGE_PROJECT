const express = require("express");
const multer = require("multer");
const users = require("../model/userSchema");
const router = new express.Router();
const moment = require("moment");
// router.get("/", (req, res) => {
//   res.json("server start hai bhai router par");
// });

const imgconfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    callback(null, `image - ${Date.now()}. ${file.originalname}`);
  },
});

const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(new Error("Only Images are allowed"));
  }
};

const upload = multer({
  storage: imgconfig,
  fileFilter: isImage,
});
// ********** POST REST API ****************
router.post("/register", upload.single("photo"), async (req, res) => {
  const { filename } = req.file;
  const { fname } = req.body;

  if (!fname || !filename) {
    res.status(401).json({ status: 401, message: "Fill all the details" });
  }
  try {
    const date = moment(new Date()).format("YYYY-MM-DD");
    const userData = new users({
      fname: fname,
      imgPath: filename,
      date: date,
    });

    const finalData = await userData.save();

    res.status(201).json({ status: 201, finalData });
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
});

// *************GET REST API **********

router.get("/getdata", async (req, res) => {
  try {
    const getUser = await users.find();
    res.status(201).json({ status: 201, getUser });
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
});

module.exports = router;
