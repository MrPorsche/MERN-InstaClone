const Express = require("express");
const Router = Express.Router();
const Mongoose = require("mongoose");
const USERs = Mongoose.model("Users");
const Bcrypt = require("bcryptjs");

Router.get('/', (req, res) => {
    res.send("Welcome");
    
});

Router.post("/signUp", (req, res) => {
    const { name, userName, email, password } = req.body;
    if(!name || !userName || !email || !password){
        res.status(422).json({ err: "Please fill out all the required details and try again!"});
    }
    USERs.findOne({
        $or: [{ email: email }, { userName: userName }]
    }).then((savedEmail) => {
        if(savedEmail){
            return res.status(422).json({ err: "Email ID or Username already exists!"})
        }
        
        Bcrypt.hash(password, 18).then((hPass) => {
            const User = new USERs({
                name, email, userName, password: hPass
            });
        
            User.save()
            .then(User => {
                res.json({ message: "user saved successfully!" })
            })
            .catch(err => { console.log(err);
            });
        });
        
    });
});

module.exports = Router;