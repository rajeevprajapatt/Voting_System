const jwt = require("jsonwebtoken");
const secretKey = "SBCET@99Xt";

const setUser = (user) => {
    return jwt.sign({
        _id: user._id,
        email: user.email
    }, secretKey);
}
