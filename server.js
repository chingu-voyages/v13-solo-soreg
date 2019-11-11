const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

const mongoURI = "mongodb://localhost:27017/personaldiary";

mongoose
    .connect(mongoURI, { useNewUrlParser: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

const Users = require("./routes/Users");

app.use("/", express.static(path.join(__dirname, "dist")));
app.use("/users", Users);

app.listen(port, () => console.log("Listening on Port ", port));
