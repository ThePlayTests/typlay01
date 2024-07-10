"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
// import * as fs from 'node:fs';
// import * as dataFile from '../../test_data/data1.json'
const testData = [
    { username: 'user1', password: 'pass1', expected: 'Welcome user1' },
    { username: 'user2', password: 'pass2', expected: 'Welcome user2' },
    { username: 'user3', password: 'pass3', expected: 'Welcome user3' },
];
test_1.test.describe('Data-Driven Tests With fixed data', () => {
    for (const data of testData) {
        (0, test_1.test)(`Login test for ${data.username}`, async () => {
            console.log(`user name: ${data.username} password: ${data.password} expected message: ${data.expected}`);
        });
    }
});
