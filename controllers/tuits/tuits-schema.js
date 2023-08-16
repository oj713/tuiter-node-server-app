import mongoose from 'mongoose';

const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    dislikes: Number, 
    disliked: Boolean
}, {collection: 'tuits'}) // collection where tuits are stored in tuiter database

export default schema