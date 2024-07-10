"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const fs = __importStar(require("fs"));
const node_test_1 = require("node:test");
const path = __importStar(require("path"));
(0, node_test_1.describe)("Dynamic data test", () => {
    const dataPath = path.join(__dirname, '../../test_data/data1.json');
    const jsonString = fs.readFileSync(dataPath, 'utf-8');
    const jsonTestData1 = JSON.parse(jsonString);
    //const userData = jsonTestData1 as Root;
    test_1.test.describe('Data-Driven Tests With json file data', () => {
        for (const Root of jsonTestData1) {
            (0, test_1.test)(`Login test for ${Root.username}`, () => {
                console.log(`user name: ${Root.username} password: ${Root.password} expected message: ${Root.expected}`);
            });
        }
    });
});
