import dotenv from "dotenv";
import { app } from "./app.js";
import {connectDB, gracefulShutdown} from "./db/db-index.js";

dotenv.config({
  path: "./env",
});

const PORT = process.env.PORT || 3000;

// Listen for termination signals
process.on("SIGINT", gracefulShutdown); // For Ctrl+C
process.on("SIGTERM", gracefulShutdown); // For termination from the OS or a cloud provider


connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`sever is running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`MONGODB Connection failed`, err.message);
    process.exit(1);
  });
