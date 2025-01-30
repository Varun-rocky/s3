const {  fetchFileFromS3 } = require("../services/s3Service");



const fetchFile = async (req, res) => {
  try {
    const { filename } = req.query;
    if (!filename) {
      return res.status(400).json({ error: "Filename is required" });
    }

    const bucketName = process.env.AWS_S3_BUCKET;
    await fetchFileFromS3(bucketName, filename, res);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {  fetchFile };
