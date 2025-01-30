const { s3Client } = require("../config/s3Client");
const { GetObjectCommand } = require("@aws-sdk/client-s3");



// Function to fetch and stream a file from S3
const fetchFileFromS3 = async (bucketName, key, res) => {
  try {
    const command = new GetObjectCommand({ Bucket: bucketName, Key: key });
    const { Body } = await s3Client.send(command);
    
    res.setHeader("Content-Type", "application/pdf");
    Body.pipe(res); // Stream file to client
  } catch (error) {
    console.error("Error fetching file:", error);
    throw error;
  }
};

module.exports = { fetchFileFromS3 }