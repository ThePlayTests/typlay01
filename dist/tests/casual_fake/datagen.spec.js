"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const datagenerator_1 = require("../testhelpers/datagenerator");
var datObject;
var filePath = "../../test_data/datx1.json";
test_1.test.describe("generate test data dynamically", () => {
    test_1.test.beforeAll(async () => {
        datObject = new datagenerator_1.TestDataGenerator(filePath);
        console.log(await datObject.writeDataSetToFile2(2));
    });
    (0, test_1.test)("test sample1", async () => {
        var dat;
        var x = await datObject.jsonDataReader(dat);
        console.log(x);
    });
});
