const { User } = require("../models/user");
const { setUser } = require("../services/auth")
async function UserSignup(req, res) {
    const { name, rollno, email, password, } = req.body;
    if (!name || !email || !password || !rollno) {
        return res.status(400).render("signup", {
            msg: "All Fields Required",
        });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).render("signup", { msg: "Please try with a different email" });
        }

        const newUser = await User.create({
            name,
            email,
            password,
            path: file
        });

        const token = setUser(newUser);
        res.cookie("uid", token);
        return res.redirect("/home");

    } catch (error) {
        console.error("Error during user signup:", error);
        return res.status(500).render("signup", { msg: "Error, please try again" });
    }
}

module.exports = {
    UserSignup,
}