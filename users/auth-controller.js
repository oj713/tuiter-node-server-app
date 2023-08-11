import * as usersDao from './users-dao.js';

const AuthController = (app) => {
    const register = (req, res) => {
        const username = req.body.username;
        const user = usersDao.findUserByUsername(username)
        if (user) {
            res.sendStatus(404)
        } else {
            const newUser = usersDao.createUser(req.body)
            req.session['currentUser'] = newUser // store user in current session
            res.json(newUser) // return user
        }
    }
    const login    = (req, res) => {
        const username = req.body.username
        const password = req.body.password
        const user = usersDao.findUserByCredentials(username, password)
        if (user) {
            req.session["currentUser"] = user
            res.json(user)
        } else {
            res.sendStatus(404)
        }
    }
    const profile  = (req, res) => {
        const currentUser = req.session["currentUser"]
        if (!currentUser) {
            res.sendStatus(404)
            return
        }
        res.json(currentUser)
    }
    const logout   = (req, res) => { 
        req.session.destroy()
        res.sendStatus(200)
    }
    const update = (req, res) => {
        const username = req.params.username
        const updates = req.body
        usersDao.updateUser(username, updates)
        res.sendStatus(200)
    }
    const findAll = (req, res) => res.json(usersDao.findAllUsers())
    

    app.post("/api/users/register", register)
    app.post("/api/users/login",    login)
    app.post("/api/users/profile",  profile)
    app.post("/api/users/logout",   logout)
    app.put ("/api/users/:username", update)
    app.get ("/api/users", findAll)
}

export default AuthController