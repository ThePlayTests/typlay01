import path from 'path';
import fs from 'fs'


var casual = require('casual').en_US;

export  class TestDataGenerator{
    // Define the path to the JSON file
    //const filePath1 = path.join(__dirname, 'testdata.json');
    
    filepath: string='';
    constructor(filepath: string){
        this.filepath =filepath;
    }
    
    /**
     * 
     * @param sets :number of data sets
     */
    async writeDataSetToFile(sets: number):Promise<void> {

    
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
            
            const jsonString = JSON.stringify(testDataList, null, 2);
            // Write JSON string to file
            fs.writeFileSync(this.filepath, jsonString,'utf-8');
            
        } catch (error) {
            console.error('Error writing file', error);
        }
    }    

    /**
     * 
     * @param sets :number of data sets
     */
    async writeDataSetToFile2<T>(sets: number,dataObject?:T):Promise<string> {

        const dataPath = path.join(__dirname, this.filepath);
        let testDataList=[]
        try {
            for(let i=0;i<sets;i++){
                
                // // Define the test data
                // let testData = {
                //       name: casual.first_name,
                //       age: casual.building_number,
                //       email: casual.email
                //     };
                testDataList.push(dataObject)
            }
            
            const jsonString = JSON.stringify(testDataList, null, 2);
            // Write JSON string to file
            fs.writeFileSync(dataPath, jsonString,'utf-8');
            
        } catch (error) {
            console.error('Error writing file', error);
        }
        return this.filepath;
    }    

    async jsonDataReader<T>(dataType:T):Promise<T[]>{
        const dataPath = path.join(__dirname, this.filepath);
        const jsonString = fs.readFileSync(dataPath, 'utf-8');
        const jsonTestData1 = JSON.parse(jsonString) as T[];
        return jsonTestData1;
    }


}