// GET, PATCH, DELETE, POST
const { response } = require("express")
const express = require("express")
const router = express.Router()

// Schemas
const postSchema = require("../models/post")


// Then y catch
// Async await

/**
 * Pending
 * Accepted
 * Rejected
 */

// Crear post
router.post("/posts", async (request, response) => {
  console.log("data",request.body)

  // Promise synchronous
  try {
    const post = await postSchema(request.body) // creamos en mongo
    post.save()
    response.status(201).send(post)
  } catch (error) {
    response.status(500).send(error)
  }

})

// Get
router.get("/posts", async (request, response) => {
  try {
    const posts = await postSchema.find()
    response.status(201).send(posts)
  } catch (error) {
    response.status(500).send(error)
  }
})

// Get by ID
router.get("/posts/:id", async (request, response) => {
  const { id } = request.params
  try {
    const post = await postSchema.findById(id)
    response.status(201).send(post)
  } catch (error) {
    response.status(500).send(error.message)
  }
})

module.exports = router