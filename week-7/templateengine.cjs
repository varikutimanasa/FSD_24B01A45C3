const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.render("index", {
        name: "Manasa"
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
//VALIDATION
app.post("/submit", (req, res) => {

    const username = req.body.username;
    const age = req.body.age;

    if (!username || username.trim() === "") {
        return res.send("Username is required");
    }

    if (!age || age < 18) {
        return res.send("Age must be 18 or above");
    }

    res.send(`Welcome ${username}, your age is ${age}`);
});
