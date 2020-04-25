'use strict'

const faker = require('faker'); // fake data API
const documents = []; // seed object
const documentQty = 10; // documents to create

const createFake = () => ({
    first_name: faker.name.findName(),
    last_name: faker.name.findName(),
    email: faker.internet.email(),
    note: faker.company.catchPhrase(),
    created: new Date(Date.now()),
    modified: new Date(Date.now())
});

for (let i = 0; i < documentQty; i++) {
    documents.push(createFake());
};

module.exports = documents;
