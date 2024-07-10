"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeDataToFile = writeDataToFile;
exports.writeDataSetToFile = writeDataSetToFile;
// Import required modules
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
// Define the path to the JSON file
const filePath = path_1.default.join(__dirname, 'testdata.json');
var casual = require('casual').en_US;
// Function to write data to JSON file
async function writeDataToFile(data, filePath) {
    try {
        // Convert data to JSON string
        const jsonString = JSON.stringify(data, null, 2);
        // Write JSON string to file
        await fs_1.promises.writeFile(filePath, jsonString, 'utf8');
        console.log(`Data successfully written to ${filePath}`);
    }
    catch (error) {
        console.error('Error writing file', error);
    }
}
async function writeDataSetToFile(sets, filePath) {
    let testDataList = [];
    try {
        for (let i = 0; i < sets; i++) {
            // Define the test data
            let testData = {
                name: casual.first_name,
                age: casual.building_number,
                email: casual.email
            };
            testDataList.push(testData);
        }
        // Convert data to JSON string
        const jsonString = JSON.stringify(testDataList, null, 2);
        // Write JSON string to file
        await fs_1.promises.writeFile(filePath, jsonString, 'utf8');
        console.log(`Data successfully written to ${filePath}`);
    }
    catch (error) {
        console.error('Error writing file', error);
    }
}
// Call the function to write data
//writeDataToFile(testData, filePath);
