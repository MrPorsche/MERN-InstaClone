const Mongoose = require("mongoose");
const { ObjectId} = Mongoose.Schema.Types;

const postSchema = new Mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    postedBy: {
        type: ObjectId,
        ref: "Users"
    }
    
});

Mongoose.model("POSTs", postSchema);