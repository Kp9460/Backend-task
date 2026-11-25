// server create karna
// server config karna

const express = require("express")
const noteModel = require("./models/note.model")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

// POST  /api/notes
// create new note and save data in mongodb
// req.body = {title,description}
app.post("/api/notes" ,async (req,res)=> {
    const {title,description} = req.body

    const note = await noteModel.create({
        title, description
    })

    res.status(201).json({
        message: "note created successfully.",
        note
    })
})

// GET  /api/notes
// fetch all the notes data from mongodb andsend them in the response
app.get("/api/notes",async (req,res)=> {
    const notes = await noteModel.find()

    res.status(200).json({
        message: "note fetched successfully.",
        notes
    })
})

// DELETE /api/notes/:id
// delete note with the id from req.params
app.delete("/api/notes/:id",async (req,res)=> {
    const id = req.params.id

    await noteModel.findByIdAndDelete(id)
    
    res.status(200).json({
        message: "Note deleted successfully"
    })
})

// PATCH /api/notes/:id
// upadate the description of the note by id
// req.body = {description}
app.patch("/api/notes/:id",async (req,res)=> {
    const id = req.params.id
    const {description} = req.body

    await noteModel.findByIdAndUpdate(id, {description})

    res.status(200).json({
        message: "note update successfully"
    })
})


module.exports = app