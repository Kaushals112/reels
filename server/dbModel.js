import mongoose from "mongoose";

const shortifySchema=mongoose.Schema({
    url:String,
    channel:String,
    song:String,
    likes:Number,
    comments:String,
    description:String,
    shares:String
});

export default mongoose.model("shortifyVideos",shortifySchema);