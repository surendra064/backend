import moongoose from 'mongoose'
import { DB_NAME } from '../constants.js'


const connectDB = async () => {
    try {
        const connectionInstance = await moongoose.connect(`${process.env.DB_URL}/${DB_NAME}`)
        console.log(`MongoDB Connected !!!!! ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default connectDB;