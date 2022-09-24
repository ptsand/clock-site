import express from "express";
const app = express();

app.use(express.static("public"));

import path from "path";

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/clock.html"));
});

const port = process.env.NETLIFY ? 80 : 8080; // use port 80 on netlify
app.listen(port, (error) => {
    console.log("Server is running on port", port);
});
