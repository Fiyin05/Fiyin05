//const {describe} = require("mocha");
describe("valid website", () => {

  it("can launch website", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/")
  })
})