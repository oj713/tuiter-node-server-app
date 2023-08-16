/*
The following app.js implements an HTTP server that responds Hello World! when the server receives an HTTP request at the URL http://localhost:4000/hello. You can copy and paste the URL in a browser to send the HTTP request and the browser will render the response from the server. The require function is equivalent to the import keyword and loads a library into the local source. The express() function call creates an instance of the express library and assigns it to local constant app. Developers use the app instance to configure the server on what to do when various types of requests are received. For instance the example below uses the app.get() function to configure an HTTP handler by mapping the URL pattern '/hello' to a function that handles the HTTP request.
*/
import "dotenv/config"
//const express = require('express')
import express from 'express';
// configure servers to allow interoperability from scripts in other domains
// Cross Origin Resource Sharing (CORS)
import cors from 'cors'
import HelloController from './controllers/hello-controller.js'
import UserController from './users/users-controller.js'
import TuitsController from './controllers/tuits/tuits-controller.js'
import session from 'express-session'
import AuthController from "./users/auth-controller.js"

import mongoose from 'mongoose'
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
console.log(CONNECTION_STRING)
mongoose.connect(CONNECTION_STRING) // "mongodb://127.0.0.1:27017/tuiter")

const app = express()
app.use(express.json()) // parse JSON body, middleware

app.use(cors({
    credentials: true, // support cookies
    origin: process.env.FRONTEND_URL // restrict cross origin resource sharing to react app
})) // allow CORS
const sessionOptions = {
    secret: 'any string', //default session config
    resave: false, // locally, needs to be tweaked for production
    saveUninitialized: false
}
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(session(sessionOptions))

AuthController(app)
TuitsController(app)
UserController(app)
HelloController(app)
app.listen(process.env.PORT || 4000); // order doesn't matter 