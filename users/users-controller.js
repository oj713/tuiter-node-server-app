// import people from './users.js';
// let users = people
import * as usersDao from "./users-dao.js"

const UserController = (app) => {
  app.get('/api/users', findUsers)
  // colon declares placeholder
  app.get('/api/users/:uid', findUserById)
  app.post('/api/users', createUser) // map URL pattern to handler function
  app.delete('/api/users/:uid', deleteUser)
  app.put('/api/users/:uid', updateUser)
}

const updateUser = async (req, res) => {
  const id = req.params['uid'];
  const status = await usersDao.updateUser(id, req.body);
  const user = await usersDao.findUserById(id);
  req.session["currentUser"] = user;
  res.json(status);
};

const deleteUser = async (req, res) => {
    const id = req.params['uid']
    const status = await usersDao.deleteUser(id);
    res.json(status);
    // users = users.filter(user => user._id !== userId)
    // res.sendStatus(200); //send success code
}

/*
In prior exercises we sent data to the server by encoding it as part of the path or query parameters which is limited and unsafe since browsers impose a limit in the length of the URL and it is sent to the server in plain text, visible to any prying eyes between the client and the server. Alternatively data can be sent to the server embedded in the body of the HTTP request where it can be encrypted for safe transmission. The function createUser below can read data posted to the server, embedded in the HTTP request body, and interpret it as a new user and store it in the users array.
*/
const createUser = async (req, res) => {
    // const newUser = req.body
    // newUser._id = (new Date()).getTime() + ''
    // users.push(newUser)
    const newUser = await usersDao.createUser(req.body);
    res.json(newUser)
}

// encoding ID of a user as part of URL path pattern
const findUserById = async (req, res) => {
    const userId = req.params.uid 
    const user = await usersDao.findUserById(userId)
    //const user = users.find(u => u._id === userId)
    res.json(user)
}

// query string parameters are name value pairs separated by ampersands

const findUsers = async (req, res) => {
    const username = req.query.username;
      const password = req.query.password;
      if (username && password) {
        const user = await usersDao.findUserByCredentials(username, password);
        if (user) {
          res.json(user);
        } else {
          res.sendStatus(404);
        }
      } else if (username) {
        const user = await usersDao.findUserByUsername(username);
        if (user) {
          res.json(user);
        } else {
          res.sendStatus(404);
        }
      } else {
        const users = await usersDao.findAllUsers();
        res.json(users);
      }
    // const type = req.query.type // req.query['type']
    // if (type) { // if type parameter in query
    //     const usersOfType = users
    //     .filter (u => u.type === type)
    //     res.json(usersOfType)
    //     return // don't continue
    // }
    // // json array of users
    // res.json(users) // otherwise all users
}

export default UserController;