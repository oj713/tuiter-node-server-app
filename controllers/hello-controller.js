
/*
controllers are functions, classes, or modules that only handle HTTP requests and participate in client/server arhitecture

Controllers define HTTP endpoints that client applications can invoke through HTTP requests. Creating a controller per type of data is common strategy to break up source code. For instance, a controller for users, a controller for courses, and a controller for grades.
*/

const HelloController = (app) => {
    app.get('/hello', (req, res) => {res.send('Life is good!')})
    app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
}
export default HelloController;