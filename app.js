
// Modules Globales
const express = require("express")
const mongoose = require("mongoose");
require("dotenv").config()
const cors = require("cors");

// Modules locales
const postRoutes = require("./routes/post")




// Execute
const app = express();

// Middleware global
app.use(express.json())
app.use(cors())
app.use("/api", postRoutes)

// Variables globales
const PORT = process.env.DB_PORT || 5000

// Global route
app.get("/", (request, response) => {
  response.send("Esta funcionando")
})


/**
 * Pending
 * Accepted
 * Rejected
 */

// Syncrono
// Connect to mongoose
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Estamos conectados a MONGO")) // accepted
.catch((error) => console.log(error)) // rejected

// Listening server
app.listen(PORT, () => console.log("Estamos conectados"))