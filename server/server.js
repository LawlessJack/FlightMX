require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("routes");
const app = express();
const PORT = process.env.PORT || 3001;

//Define middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//serve up static routes

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);

// mongodb connection init 
try {
    mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/store-mongo', { useNewUrlParser: true, useUnifiedTopology: true })
} catch(error) {
    console.log(error);
}

app.listen(PORT, function () {
    console.log(`==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT} in your browser.`)
}) 