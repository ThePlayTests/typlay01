"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestDataGenerator = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
var casual = require('casual').en_US;
class TestDataGenerator {
    // Define the path to the JSON file
    //const filePath1 = path.join(__dirname, 'testdata.json');
    filepath = '';
    constructor(filepath) {
        this.filepath = filepath;
    }
    /**
     *
     * @param sets :number of data sets
     */
    async writeDataSetToFile(sets) {
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
            const jsonString = JSON.stringify(testDataList, null, 2);
            // Write JSON string to file
            fs_1.default.writeFileSync(this.filepath, jsonString, 'utf-8');
        }
        catch (error) {
            console.error('Error writing file', error);
        }
    }
    /**
     *
     * @param sets :number of data sets
     */
    async writeDataSetToFile2(sets, dataObject) {
        const dataPath = path_1.default.join(__dirname, this.filepath);
        let testDataList = [];
        try {
            for (let i = 0; i < sets; i++) {
                // // Define the test data
                // let testData = {
                //       name: casual.first_name,
                //       age: casual.building_number,
                //       email: casual.email
                //     };
                testDataList.push(dataObject);
            }
            const jsonString = JSON.stringify(testDataList, null, 2);
            // Write JSON string to file
            fs_1.default.writeFileSync(dataPath, jsonString, 'utf-8');
        }
        catch (error) {
            console.error('Error writing file', error);
        }
        return this.filepath;
    }
    async jsonDataReader(dataType) {
        const dataPath = path_1.default.join(__dirname, this.filepath);
        const jsonString = fs_1.default.readFileSync(dataPath, 'utf-8');
        const jsonTestData1 = JSON.parse(jsonString);
        return jsonTestData1;
    }
}
exports.TestDataGenerator = TestDataGenerator;
