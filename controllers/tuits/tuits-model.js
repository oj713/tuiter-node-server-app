import mongoose from 'mongoose'
import tuitsSchema from './tuits-schema.js'

/*Mongoose models provide similar functions to interact with MongoDB programmatically instead of manually. The functions are similar to the ones found in the mongo shell client: find(), create(), updateOne(), removeOne(), etc. In tuits/tuits-model.js below, create a Mongoose model from the tuit schema. The functions provided by Mongoose models are deliberately generic because they can interact with any collection configured in the schema. In the next section we'll create a data access object that implements higher level functions specific to the domain of tuits.
*/

const tuitsModel = mongoose.model('TuitModel', tuitsSchema) // create mongoose model
export default tuitsModel
