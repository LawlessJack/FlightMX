//Dependencies
const mongoose = require("mongoose");
const db = require("../mongoose/models"); // model objects
const seedObj = require("../mongoose/seeds"); // seed data objects

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/dev_nosql",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// User data import, populates data from /db/noSql/seeds/user.js via index.js
db.User.deleteMany({})
    .then(() => db.User.collection.insertMany(seedObj.User))
    .then((data) => {
        console.log(`user document: ${data.result.n} records populated!`);
    })
    .then(() => mongoose.disconnect())
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });

// activity data import, populates data from /db/noSql/seeds/activity.js via index.js
db.Activity.deleteMany({})
    .then(() => db.Activity.collection.insertMany(seedObj.Activity))
    .then((data) => {
        console.log(`activity document: ${data.result.n} records populated!`);
    })
    .then(() => mongoose.disconnect())
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });


// // loop array of mongoDB collection names.
// Object.keys(mongoose.connection.collections).forEach(e => {
//     let collectionName = e.substring(1, 0).toUpperCase() + e.substring(1, e.length);
//     console.log(collectionName)
// });

