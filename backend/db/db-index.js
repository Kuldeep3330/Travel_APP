import mongoose from 'mongoose'
import {DB_NAME} from "../constants.js"


const connectDB = async () => {
    try{
      const connectIns=  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log(`\n MONGODB Connected: ${connectIns.connection.host}`);
      
    }catch(err){
        console.log(`MONGODB Connection failed`, err.message)
        process.exit(1);
    }
}

export default connectDB