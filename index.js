const express = require("express");
const PORT = 3000;
const path = require('path');
const cookieParser = require('cookie-parser');
const uri = "mongodb+srv://rajeevprajapat06:Rajeev%4063789@Fashion-View.jr5jy.mongodb.net/VotingSystem?retryWrites=true&w=majority";
const app = express();
const { mongoConnect } = require("./connection")

mongoConnect(uri).then(() => {
    console.log("MongoDB connected successfully");
})

const { UserSignup } = require("./controllers/user")

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.static(path.resolve("./public")));


app.get("/", (req, res) => {
    return res.render("signup");
})
app.get("/home", (req, res) => {
    return res.render("index");
})
app.post("/signup", UserSignup);

app.listen(PORT, () => {
    console.log("server is running");
})