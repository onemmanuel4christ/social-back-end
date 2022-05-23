const monggose = require("mongoose")

const PostSchema = new monggose.Schema({
 userId:{
     type: String,
     required: true
 }, 
 desc: {
     type: String,
     max: 500,
 },
 img: {
     type: String
 },
 likes:{
     type: Array,
     default:[]
 }

}, 
{timestamps: true}
);

module.exports = monggose.model("Post", PostSchema)