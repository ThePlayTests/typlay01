import {test} from '@playwright/test'
import {TestDataGenerator} from '../testhelpers/datagenerator'
import casual from 'casual'
import {NewSocialUser2} from '../../data_objects/data1'
import { NewSocialUser } from '../AppPages/Pages/NewUser';

var datObject:TestDataGenerator;
var filePath ="../../test_data/datx1.json";
test.describe("generate test data dynamically",()=>{
    
    test.beforeAll(async()=>{
        datObject = new TestDataGenerator(filePath) 
        
        console.log(await datObject.writeDataSetToFile2(2));
    })


    test("test sample1",async()=>{
        var dat;
        var x = await datObject.jsonDataReader(dat as unknown as NewSocialUser2);
        console.log(x);
    })
})