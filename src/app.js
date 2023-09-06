const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "pages/index.html"));
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000);
