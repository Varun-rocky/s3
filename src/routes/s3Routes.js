const express = require("express");
const {  fetchFile } = require("../controllers/s3Controller");

const router = express.Router();



// Route to fetch and stream a file from S3
router.get("/fetch-file", fetchFile);

module.exports = router;
