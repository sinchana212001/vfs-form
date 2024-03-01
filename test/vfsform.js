import { Builder, By, Key, until } from "selenium-webdriver";
import { expect, should } from "chai";

describe("vfs form", function () {
  let driver;
  this.timeout(90000);

  before(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://ven06798.service-now.com/vfsp?id=vfs_get_page");
  });

  after(async function () {
    this.timeout(3000);
    await driver.quit();
  });

  // it("single trip", async function () {
  //   await driver.findElement(By.id("option_0")).click();
  //   await driver.sleep(3000);

  //   const dropdown = await driver.findElement(By.id("travelregion"));
  //   await dropdown.click();

  //   const options = await dropdown.findElements(By.tagName("option"));
  //   const optionTexts = await Promise.all(options.map((option) => option.getText()));
  //   await new Promise((resolve) => setTimeout(resolve, 3000));
  //   const expectedValues = ["asia", "schengen", "america", "others"]; //positive assertion
  //   expectedValues.forEach((expectedValue) => {
  //     expect(optionTexts).to.include(expectedValue);
  //   });

    
  //   const notExpectedValues = ["fghjk", " nmrtyhn"]; //negative assertion
  //   notExpectedValues.forEach((notExpectedValue) => {
  //     expect(optionTexts).to.not.include(notExpectedValue);
  //   });
  // });

  it("multi trip", async function () {
    this.timeout(50000);
    await driver.findElement(By.id("option_1")).click();

    await driver.sleep(3000);

    const dropdown = await driver.findElement(By.id("travelregion"));
    await dropdown.click();

    const options = await dropdown.findElements(By.tagName("option"));
    const optionTexts = await Promise.all(options.map((option) => option.getText()));
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const expectedValues = ["worldwide"]; //positive assertion
    expectedValues.forEach((expectedValue) => {
      expect(optionTexts).to.include(expectedValue);
    });

    const notExpectedValues = ["fghjk", " nmrtyhn"]; //negative assertion
    notExpectedValues.forEach((notExpectedValue) => {
      expect(optionTexts).to.not.include(notExpectedValue);
    });

    
  });

  // it("annual trip", async function () {
  //     await driver.findElement(By.id("option_2")).click();
  //     await driver.sleep(3000);
  
  //     const dropdown = await driver.findElement(By.id("travelregion"));
  //     await dropdown.click();
  
  //     const options = await dropdown.findElements(By.tagName("option"));
  //     const optionTexts = await Promise.all(options.map((option) => option.getText()));
  //     await new Promise((resolve) => setTimeout(resolve, 3000));
  //     const expectedValues = ["worldwide"]; //positive assertion
  //     expectedValues.forEach((expectedValue) => {
  //       expect(optionTexts).to.include(expectedValue);
  //     });
  
  //     const notExpectedValues = ["fghjk", " nmrtyhn"]; //negative assertion
  //     notExpectedValues.forEach((notExpectedValue) => {
  //       expect(optionTexts).to.not.include(notExpectedValue);

    



  });
// });


     
      // before(async function () {
      //   driver = await new Builder().forBrowser("chrome").build();
      //   await driver.get("https://ven06798.service-now.com/vfsp?id=vfs_get_page");
      // });

      // after(async function () {
      //   await driver.quit();
      // });

      // describe("Start and End Date Fields", function () {
      //   let driver;

      //   before(async function () {
      // driver = await new Builder().forBrowser("chrome").build();
      // await driver.get("https://ven06798.service-now.com/vfsp?id=vfs_get_page");
      //       });

      //       after(async function () {
      //         await driver.quit();
      //       });

      //       it("Start date should be selectable", async function () {
      //         const startDatePicker = await driver.findElement(By.id("startdatepicker"));
      //         await startDatePicker.click();
      //       });

      //       it("End date should be selectable", async function () {
      //         const endDatePicker = await driver.findElement(By.id("enddatepicker"));
      //         await endDatePicker.click();

      //       });

      //       it("End date should not be selectable before start date", async function () {
      //         const startDatePicker = await driver.findElement(By.id("startdatepicker"));
      //         const endDatePicker = await driver.findElement(By.id("enddatepicker"));

      //         const today = new Date().toISOString().split("T")[0];
      //         await startDatePicker.sendKeys(today);

      //         const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0]; // Yesterday's date
      //         await endDatePicker.sendKeys(yesterday);

      //         const endDateValue = await endDatePicker.getAttribute("value");
      //         expect(endDateValue).to.not.equal(yesterday);
//     });
//   });
// });
