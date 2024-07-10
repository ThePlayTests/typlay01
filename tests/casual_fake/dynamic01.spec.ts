import {test} from '@playwright/test'
import { exec } from 'child_process';
import * as fs from 'fs'
import { writeDataToFile,writeDataSetToFile } from '../testhelpers/datawriter';
import {TestDataGenerator} from '../testhelpers/datagenerator'
import path from 'path'

// const command = 'echo Hello, world!';
const command='dir'

exec(command, (error, stdout, stderr) => {
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

const {execSync} = require('child_process');
let output = execSync('fony -t "{\"name\": \"name\", \"age\": \"age\", \"address\": \"address\"}"');
//let casual = require('casual')
var casual = require('casual').en_US;
// Define the test data
let testData = {
    name: casual.first_name,
    age: casual.building_number,
    email: casual.email
};



test("execute command line ",async ()=>{
    
    await writeDataToFile(testData,"./user.json");
    await writeDataSetToFile(2,"./user1.json");
    const filePath1 = path.join(__dirname, '../../test_data/dataX1.json');
    var dataGen = new TestDataGenerator(filePath1);
    await dataGen.writeDataSetToFile(2);
    


    //console.log(`${await output}`);
})

