import mongoose from 'mongoose';
import userSchema from './users-schema.js'

const usersModel = mongoose.model("users", userSchema)
export default usersModel