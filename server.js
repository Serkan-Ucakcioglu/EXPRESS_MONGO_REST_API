const express = require("express");
const app = express();
const NoteRoute = require("./router/NoteRoute");
const connectDB = require("./config/connectDb");

require("dotenv").config();

connectDB();

app.use(express.json());
app.use("/notes", NoteRoute);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running port: ${PORT}`);
});
