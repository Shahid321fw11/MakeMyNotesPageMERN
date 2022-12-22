const express = require("express");
const app = express();
const notes = require("./notes");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const connectBD = require("./config/db");

dotenv.config();
connectBD();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is running correctly");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

// app.post("/api/users", (req, res) => {
//   res.send("success");
// });

app.use("api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
