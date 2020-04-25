'use strict'
const faker = require('faker'); // fake data API

const collectionSeed = []; // seed object
const documentQty = 5; // documents to create

for (let i = 0; i < documentQty; i++) {
    const document = {
        // seed object goes here
        user_id: faker.name.findName(),
        email: faker.internet.email(),
        ip_address: faker.internet.ip(),
        note: faker.company.catchPhrase(),
        created: new Date(Date.now()),
        modified: new Date(Date.now())
    }
    collectionSeed.push(document);
};

module.exports = collectionSeed;