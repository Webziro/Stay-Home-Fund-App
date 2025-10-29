import dotenv from "dotenv";
import app, { listEndpoints } from "./app.js";
import http from "http";
import { connectDB } from "./config/db.config.js";

// Load environment variables
dotenv.config();

const port = process.env.PORT || 3000;

const server = http.createServer(app);
// START SERVER
connectDB()
  .then(async () => {
    server.listen(port, () => {
      console.log(`\n🚀 Server ready at http://localhost:${port}`);
      console.log("=".repeat(60));

      // List endpoints after server is running
      setTimeout(() => {
        listEndpoints();
      }, 100); // Small delay to ensure server is fully started
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  });
