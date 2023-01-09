const Notes = require("../model/NotesSchema");
const getAllNotes = async (req, res) => {
  try {
    const noteList = await Notes.find();
    res.status(200).json(noteList);
  } catch (error) {
    console.log("err", error);
  }
};

const getNote = async (req, res) => {
  try {
    const finds = await Notes.findById(req.params.id);
    res.status(200).json(finds);
  } catch (error) {
    res.status(404).json({ message: "note not found" });
  }
};

const createNote = async (req, res) => {
  try {
    const newNote = await Notes.create(req.body);
    res.status(201).json(newNote);
  } catch (err) {
    res.status(404).json({ message: "note " });
  }
};

const updateNote = async (req, res) => {
  try {
    const updateNote = await Notes.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updateNote);
  } catch (err) {
    res.status(404).json({ message: "note not found" });
  }
};

const deleteNote = async (req, res) => {
  try {
    const deletedNote = await Notes.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "Success deleted note" });
  } catch (error) {
    res.status(404).json({ message: "note not found" });
  }
};

module.exports = { getAllNotes, getNote, createNote, updateNote, deleteNote };
