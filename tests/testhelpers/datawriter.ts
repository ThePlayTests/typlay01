// Import required modules
import { promises as fs } from 'fs';
import path from 'path';

// Define the path to the JSON file
const filePath = path.join(__dirname, 'testdata.json');

var casual = require('casual').en_US;



// Function to write data to JSON file
export async function writeDataToFile(data: any, filePath: string): Promise<void> {
    try {
        // Convert data to JSON string
        const jsonString = JSON.stringify(data, null, 2);
        // Write JSON string to file
        await fs.writeFile(filePath, jsonString, 'utf8');
        console.log(`Data successfully written to ${filePath}`);
    } catch (error) {
        console.error('Error writing file', error);
    }
}

export async function writeDataSetToFile(sets: number,filePath: string): Promise<void> {

    
    let testDataList=[]
    try {
        for(let i=0;i<sets;i++){
            
            // Define the test data
            let testData = {
                  name: casual.first_name,
                  age: casual.building_number,
                  email: casual.email
                };
            testDataList.push(testData)
        }
        // Convert data to JSON string
        const jsonString = JSON.stringify(testDataList, null, 2);
        // Write JSON string to file
        await fs.writeFile(filePath, jsonString, 'utf8');
        console.log(`Data successfully written to ${filePath}`);
    } catch (error) {
        console.error('Error writing file', error);
    }
}







// Call the function to write data
//writeDataToFile(testData, filePath);