import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config();

/*const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
    console.log(`\nMongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
  } catch (error) {
    console.log("MONGODB connection error", error)
    process.exit(1)
  }
}
*/

connectDB();
