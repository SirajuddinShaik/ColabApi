const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Endpoint that sends a JSON response
app
  .route("/")
  .get((req, res) => {
    const jsonData = {
      message: "Hello, this is a JSON response!",
      timestamp: new Date().toISOString(),
    };
    res.json(jsonData);
  })
  .post((req, res) => {
    const details = req.query;
    console.log("Received details:", details);
    res.json({ message: "Details logged successfully", details: details });
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
