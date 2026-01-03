const express = require("express");
const app = express();

const GITHUB_TOKEN = "ghp_1234567890abcdefghijklmnopqrstuvwxyz";

app.get("/", (req, res) => {
  res.send("🚀 Node.js app deployed to AKS using GitHub Actions!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
