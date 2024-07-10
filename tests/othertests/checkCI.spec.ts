import {test,expect} from '@playwright/test'


test.describe("suite checking test running on Ci Server",()=>{
    test("test check ci server runing",async()=>{
          // Example usage in a test setup or in the tests themselves
        if (await isCiEnvironment()) {
           console.log("Running on a CI server");
        } else {
            console.log("Running on a local machine");
        }
    })
})








async function isCiEnvironment(): Promise<boolean> {
    return (
      !!process.env.CI || // Generic CI variable
      !!process.env.TRAVIS ||
      !!process.env.CIRCLECI ||
      !!process.env.GITHUB_ACTIONS ||
      !!process.env.JENKINS_HOME ||
      !!process.env.GITLAB_CI
    );
  }