const Express = require("express");
const Mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const POSTs = Mongoose.model("POSTs");
const Router = Express.Router();

Router.get("/feed", requireLogin, (req, res) => {
    POSTs.find()
        .populate("postedBy","_id name")
        .then(posts => res.json(posts))
        .catch(err => console.log(err))
});

Router.post("/post", requireLogin, (req, res) => {
    const { body, picture } = req.body;
    if(!body || !picture){
         return res.status(422).json({ err: "Please fill all required fields!" });
    } else {
        console.log(req.user)
        const POST = new POSTs({
            body, picture: picture,
            postedBy: req.user
        })
        POST.save()
            .then((result) => {
                return res.json({ POST: result })
            })
            .catch(err => console.log(err)
            );
    }
});

Router.get("/myposts", requireLogin, (req, res) => {
    POSTs.find({ postedBy:req.user._id })
        .populate("postedBy","_id name")
        .then(myposts => {
            res.json(myposts)
        })
    
});

// Router.post("/post", (req, res) => {});

module.exports = Router;