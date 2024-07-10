import {test,Expect} from '@playwright/test'
import {moment,_language_code} from 'casual'


//let casual = require('casual')
var casual = require('casual').en_US;

test.describe("Faker 'casual' package examples",()=>{
    
    test.beforeAll(()=>{
         console.log("Before All fixture");
         
    })

    test.afterAll(()=>{
        console.log("After All fixture");
    })

    test("Sample casual Address test1",()=>{
        console.log(`Country: ${casual.country}`);
        console.log(`City: ${casual.city }`) ;       
        let zip =casual.zip(5,9);
        console.log(`zip code: ${zip}`) ;       
        console.log(`Street ${casual.street}`) ;       
        console.log(`${casual.address}`) ;       
        console.log(`${casual.address1}`) ;                          
        console.log(`${casual.address2}`);    
        console.log(`${casual.state}`);
        console.log(`${casual.state_abbr}`);
        console.log(`${casual.latitude}`);
        console.log(`${casual.longitude}`);
        console.log(`${casual.building_number}`)         
             
        //            
        //           
    })

    test("Sample casual Time test2",()=>{
        console.log(`Sentence: ${casual.sentence}`);
        // console.log(`Century: ${casual.century}`) 
        console.log(`${casual.day_of_year}`) 
        let mmt =moment.format
        let dt =casual.date(mmt='YYYY-MM-DD');
        let tm = casual.time(mmt='HH:mm:ss')
        console.log(`date: ${ dt}`);
        console.log(`time: ${tm}`);
        // console.log(`${}`) 
        // console.log(`${}`);
        
    })

    test("Sample casual Name test3",()=>{

        console.log(`${casual.name}`) 
        console.log(`${casual.username}`) 
        console.log(`${casual.first_name }`);
        console.log(`${casual.last_name }`) 
        console.log(`${casual.full_name }`) 
        console.log(`${casual.password}`);
        console.log(`${casual.name_prefix}`) 
        console.log(`${casual.name_suffix  }`) 
        console.log(`${casual.company_name }`) 
        console.log(`${casual.company_suffix  }`)
        console.log(`${casual.catch_phrase }`) 
        console.log(`${casual.phone}`) 
        // console.log(`${}`)
        // console.log(`${}`) 
        // console.log(`${}`) 
        // console.log(`${}`)

                  
    })

    casual.define('user', function() {
        return {
            email: casual.email,
            firstname: casual.first_name,
            lastname: casual.last_name,
            password: casual.password
        };
    });

    test('Sample custom user profile',()=>{
        var user = casual.user;

        console.log(`custom user Email: ${user.email}`)
        console.log(`custom user First Name: ${user.firstname}`)
        console.log(`custom user Last Name: ${user.lastname}`)
        console.log(`custom user Password: ${user.password}`)

    })






})