const express = require("express");
const router = express.Router();

const newsController = require("../app/controllers/NewsController");

router.use("/view", newsController.showBlog);
router.use("/", newsController.index);

module.exports = router;
