import express from "express";
const app = express();

const PORT = 1100 || process.env.PORT;

app.get("/", (req, res) => {
    res.send("This is the index page");
});

app.listen(PORT, () => console.log(`Server Now Running on Port: ${PORT}`));
