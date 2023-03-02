const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const createUser = () => {
    const newUser = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        password: faker.datatype.uuid(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        id: faker.datatype.number()
    }
    return newUser;
}

const createCompany = () => {
    const newCompany = {
        id: faker.datatype.number(),
        name: faker.company.name(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return newCompany;
}


// return new user
app.get("/api/users/new", (req, res) => {
    res.json(createUser());
});

// return new company
app.get("/api/companies/new", (req, res) => {
    res.json(createCompany());
});

// return new user and new company
app.get("/api/user/company", (req, res) => {
    const output = {
        user: createUser(),
        company: createCompany()
    };
    res.json(output);
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );
