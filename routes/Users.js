const express = require("express");
const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const ObjectID = require("mongodb").ObjectID;

const User = require("../models/User");
users.use(cors());

process.env.SECRET_KEY = "secret";

users.post("/register", (req, res) => {
    const userData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordRepeat: req.body.passwordRepeat
    };

    User.findOne({
        email: req.body.email
    })
        .then(user => {
            if (!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash;
                    User.create(userData).then(user => {
                        res.json({
                            status: user.email + " registered!"
                        }).catch(err => {
                            res.send("error: " + err);
                        });
                    });
                });
            } else {
                res.json({
                    error: "User with email already exists!"
                });
            }
        })
        .catch(err => {
            res.send("error: " + err);
        });
});

users.post("/login", (req, res) => {
    User.findOne({
        email: req.body.email
    })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    const payload = {
                        _id: user._id,
                        name: user.name,
                        email: user.email
                    };
                    const token = jwt.sign(payload, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    });
                    res.json(token);
                } else {
                    res.json({
                        error: "Invalid password"
                    });
                }
            } else {
                res.json({
                    error: "User does not exist"
                });
            }
        })
        .catch(err => {
            res.send("error: " + err);
        });
});

users.post("/getUserEntries", (req, res) => {
    User.findOne({
        email: req.body.email
    })
        .then(user => {
            res.json({
                entries: user.entries
            });
        })
        .catch(err => {
            res.send("error: " + err);
        });
});

users.post("/createEntry", (req, res) => {
    const id = new ObjectID();

    const entryData = {
        id,
        title: req.body.entry.title,
        text: req.body.entry.text
    };

    User.findOne({
        email: req.body.email
    })
        .then(user => {
            const newEntries = user.entries.splice(0, 0, entryData);
            user.update({ entries: newEntries });
            user.save();

            res.json({
                entries: user.entries
            });
        })
        .catch(err => {
            res.send("error: " + err);
        });
});

users.post("/postEntry", (req, res) => {
    const entryData = {
        id: req.body.entry.id,
        title: req.body.entry.title,
        text: req.body.entry.text
    };

    User.findOne({
        email: req.body.email
    })
        .then(user => {
            const index = user.entries.findIndex(
                x => x.id == req.body.entry.id
            );
            user.entries.splice(index, 1, entryData);

            user.save();

            res.json({
                entries: user.entries
            });
        })
        .catch(err => {
            res.send("error: " + err);
        });
});

users.post("/deleteEntry", (req, res) => {
    User.findOne({
        email: req.body.email
    })
        .then(user => {
            user.entries = user.entries.filter(
                entry => entry.id != req.body.entryId
            );
            user.save();

            res.json({
                entries: user.entries
            });
        })
        .catch(err => {
            res.send("error: " + err);
        });
});

module.exports = users;
