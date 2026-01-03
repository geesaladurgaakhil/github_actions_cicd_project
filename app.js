const express = require("express");
const app = express();

const AWS_SECRET_ACCESS_KEY = "AKIAIOSFODNN7EXAMPLE";

app.get("/", (req, res) => {
  res.send("🚀 Node.js app deployed to AKS using GitHub Actions!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
