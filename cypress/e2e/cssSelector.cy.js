//const cypress = require("cypress")
describe ("Search on jumia Homepage",() => {
    it ("homepage", ()=> {
cy.visit ("https://www.jumia.com.ng/")
//cy.url().should("not. include","ayemidara")
cy.get("#fi-q").type("chair")
cy.get("#fi-q").should("have.value","phone")
cy.get(".btn._prim.-md.-mls.-fshe").click()
//cy.contains("button","search").click
cy.url().should("include","phone")
cy.url().should("eq","https://www.jumia.com.ng/catalog/?q=phone")
cy.url().should("not.eq","https://www.jumia.com.ng/")
cy.url().should("contain","https://www.jumia.com.ng/")
cy.get(".1b1.-fs12.-gy3").should("be.visible")
cy.get(".trig.-df.-i-ctr.-fs16").should("exist")
    })
})