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

// aircraft data import, populates data from / db / noSql / seeds / aircraft.js via index.js
db.Aircraft.deleteMany({})
    .then(() => db.Aircraft.collection.insertMany(seedObj.Aircraft))
    .then((data) => {
        console.log(`aircraft document: ${data.result.n} records populated!`);
    })
    .then(() => mongoose.disconnect())
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });

// loogbook data import, populates data from / db / noSql / seeds / loogbook.js via index.js
db.Logbook.deleteMany({})
    .then(() => db.Logbook.collection.insertMany(seedObj.Logbook))
    .then((data) => {
        console.log(`loogbook document: ${data.result.n} records populated!`);
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

