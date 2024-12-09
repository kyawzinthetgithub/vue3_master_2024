import {fakerEN_US as faker} from "@faker-js/faker";

const personName = faker.person.fullName();
const personBio = faker.person.bio();

console.log('My name is ',personName, 'I am ',personBio);
