import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
  path: './env'
})
console.log("Loaded MONGODB_URI:", process.env.MONGODB_URI) 

connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000, ()=>{
    console.log(`server is running at port : ${process.env.PORT}`);
    
  })
})
.catch((error) => {
    console.log("MONGO db connection failed !!! ", error);
    
}
)








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


