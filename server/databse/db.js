import mongoose from "mongoose"
mongoose.set('strictQuery', true)

export const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-zdmmjrh-shard-00-00.ujs3zy7.mongodb.net:27017,ac-zdmmjrh-shard-00-01.ujs3zy7.mongodb.net:27017,ac-zdmmjrh-shard-00-02.ujs3zy7.mongodb.net:27017/?ssl=true&replicaSet=atlas-oit3fm-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true})
        console.log("Database connected successfully")
    } catch(error) {
        console.log(`Error while connecting with the databse ${error}`)
    }
}

export default Connection
