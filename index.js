const express = require("express");

const app = express();

// Constant values 
const PORT = 3000;

app.use(express.static("static"));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});