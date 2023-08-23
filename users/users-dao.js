//let users = []
import usersModel from "./users-model.js"
import { ObjectId } from "mongoose";

export const findAllUsers = () => 
    usersModel.find()

export const findUserById = (uid) => {
    console.log("ID findById", uid)
    return usersModel.findById(uid);
}

export const findUserByUsername = (username) => {
    return usersModel.findOne({username})
    // const index = users.findIndex(u => u.username === username)
    // if (index !== -1) return users[index]
    // return null
}

export const findUserByCredentials = (username, password) => {
    return usersModel.findOne({username, password})
    // const index = users.findIndex(u => u.username === username && u.password === password)
    // if (index !== -1) return users[index]
    // return null
}

export const createUser = (user) => {
    return usersModel.create(user)
    // users.push(user)
    // return user
}

export const updateUser = (uid, user) => {
    console.log("ID", uid)
    console.log("USER", user)
  return usersModel.updateOne({ _id:uid }, { $set: user });
}

export const deleteUser = (uid) => {
    return usersModel.deleteOne({_id: uid})
    // const index = users.findIndex(u => u._id === uid)
    // users.splice(index, 1)
    // return {status: 'ok'}
}