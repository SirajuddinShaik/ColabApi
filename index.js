const express = require("express");
const app = express();
const port = 3000;

// Endpoint that sends a JSON response
app.get("/", (req, res) => {
  const jsonData = {
    message: "Hello, this is a JSON response!",
    timestamp: new Date().toISOString(),
  };
  res.json(jsonData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
