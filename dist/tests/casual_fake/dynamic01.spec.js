"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const child_process_1 = require("child_process");
const datawriter_1 = require("../testhelpers/datawriter");
const datagenerator_1 = require("../testhelpers/datagenerator");
const path_1 = __importDefault(require("path"));
// const command = 'echo Hello, world!';
const command = 'dir';
(0, child_process_1.exec)(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error executing command: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
const { execSync } = require('child_process');
let output = execSync('fony -t "{\"name\": \"name\", \"age\": \"age\", \"address\": \"address\"}"');
//let casual = require('casual')
var casual = require('casual').en_US;
// Define the test data
let testData = {
    name: casual.first_name,
    age: casual.building_number,
    email: casual.email
};
(0, test_1.test)("execute command line ", async () => {
    await (0, datawriter_1.writeDataToFile)(testData, "./user.json");
    await (0, datawriter_1.writeDataSetToFile)(2, "./user1.json");
    const filePath1 = path_1.default.join(__dirname, '../../test_data/dataX1.json');
    var dataGen = new datagenerator_1.TestDataGenerator(filePath1);
    await dataGen.writeDataSetToFile(2);
    //console.log(`${await output}`);
});
