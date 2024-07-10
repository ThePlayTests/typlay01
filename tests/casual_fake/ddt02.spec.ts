import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import { describe } from 'node:test';
import * as path from 'path';
import {Root2,Root} from '../../data_objects/data1'

describe("Dynamic data test",()=>{

  const dataPath = path.join(__dirname, '../../test_data/data1.json');
  const jsonString = fs.readFileSync(dataPath, 'utf-8');
  const jsonTestData1 = JSON.parse(jsonString) as Root;
  //const userData = jsonTestData1 as Root;

  test.describe('Data-Driven Tests With json file data', () => {
    for (const Root of jsonTestData1) {
      
      test(`Login test for ${Root.username}`,() => {
          console.log(`user name: ${Root.username} password: ${Root.password} expected message: ${Root.expected}`)
      });
    }
  });

});

