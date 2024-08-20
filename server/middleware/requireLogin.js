const Mongoose = require("mongoose");
const JWT = require("jsonwebtoken");
const { JWT_SECRET } = require("../keys.js");
const USERs = Mongoose.model("Users");

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    if(authorization){
        const Token = authorization.replace("Bearer ", "")
        JWT.verify(Token, JWT_SECRET, (err, payload) => {
            if(!err){
                const { _id } = payload;
                USERs.findById(_id).then(userData => {
                    req.user = userData
                    next();
                });
            } else {
                return res.status(401).json({ err: "Login required!"})
            }
        })
    } else {
        return res.status(401).json({ err: "Must login first!"})
    }
}