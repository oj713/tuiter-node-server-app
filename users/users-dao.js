//let users = []
import usersModel from "./users-model.js"

export const findAllUsers = () => usersModel.find()

export const findUserById = (uid) => {
    usersModel.findById(uid)
    // const index = users.findIndex(u => u._id === uid)
    // if (index !== -1) return users[index]
    // return null
}

export const findUserByUsername = (username) => {
    usersModel.findOne({username})
    // const index = users.findIndex(u => u.username === username)
    // if (index !== -1) return users[index]
    // return null
}

export const findUserByCredentials = (username, password) => {
    usersModel.findOne({username, password})
    // const index = users.findIndex(u => u.username === username && u.password === password)
    // if (index !== -1) return users[index]
    // return null
}

export const createUser = (user) => {
    usersModel.create(user)
    // users.push(user)
    // return user
}

export const updateUser = (id, user) => {
    usersModel.updateOne({_id: id}, {$set: user})
    // const index = users.findIndex(u=> u.username === username)
    // users[index] = {...users[index], ...user}
    // return {status: 'ok'}
}

export const deleteUser = (uid) => {
    usersModel.deleteOne({_id: uid})
    // const index = users.findIndex(u => u._id === uid)
    // users.splice(index, 1)
    // return {status: 'ok'}
}