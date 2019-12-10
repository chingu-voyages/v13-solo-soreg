const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const port = process.env.PORT || 3001;

dotenv.config({
    path: ".env"
});

app.use(bodyParser.json());
app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

const DB = process.env.DATABASE;

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

const Users = require("./routes/Users");

app.use("/", express.static(path.join(__dirname, "dist")));
app.use("/users", Users);

app.listen(port, () => console.log("Listening on Port ", port));
