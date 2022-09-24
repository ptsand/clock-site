import express from "express";
const app = express();

app.use(express.static("public"));

import path from "path";

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/clock.html"));
});

const port = process.env.PORT || 8080
app.listen(port, (error) => {
    console.log("Server is running on port", port);
});
