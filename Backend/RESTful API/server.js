import app from "./src/app.js"
import dotenv from "dotenv"
dotenv.config()
import connectDB from "./src/common/config/db.js"

const PORT = process.env.PORT || 3000

const start = async () => {
  // connect the database
  await connectDB() ;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  });
}

start().catch((err) => {
  console.error("Failed to start the server:", err)
  process.exit(1);
})