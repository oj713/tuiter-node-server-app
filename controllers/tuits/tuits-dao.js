import tuitsModel from './tuits-model.js'

export const findTuits = () => tuitsModel.find();
export const createTuit = (tuit) => tuitsModel.create(tuit);
export const deleteTuit = (tid) => tuitsModel.deleteOne({_id: tid})
export const updateTuit = (tid, tuit) => tuitsModel.updateOne({_id: tid}, {$set: tuit})

// DAOs are a connection between application and low level db access == turning low level db actions into complex API for the rest of the application
// controllers are interface between http network and javascript application