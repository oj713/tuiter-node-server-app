import posts from "./tuits.js";
let tuits = posts;

export default (app) => {
    app.post('/api/tuits', createTuit)
    app.get('/api/tuits', findTuits)
    app.put('/api/tuits/:tid', updateTuit)
    app.delete('/api/tuits/:tid', deleteTuit)
}

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime() + '';
    newTuit.likes = 0
    newTuit.dislikes = 0
    newTuit.liked = false
    newTuit.disliked = false
    tuits.unshift(newTuit)
    res.json(newTuit)
}

const findTuits = (req, res) => {
    /*
    const topic = req.query.topic 
    if (topic) { // if topic parameter in query
        const tuitsOfTopic = tuits.filter(t => t.topic === topic)
        res.json(tuitsOfTopic)
        return // don't continue
    }
    res.json(tuits)
    */
    res.json(tuits);
}

const updateTuit = (req, res) => {
    const tid = req.params['tid']
    const updates = req.body
    const tuitIndex = tuits.findIndex(t => t._id == tid)
    tuits[tuitIndex] = { ...tuits[tuitIndex], ...updates }
    res.sendStatus(200)
}

const deleteTuit = (req, res) => {
    const tuitIdToDelete = req.params['tid']
    tuits = tuits.filter(t => t._id !== tuitIdToDelete)
    res.sendStatus(200); //send success code
}