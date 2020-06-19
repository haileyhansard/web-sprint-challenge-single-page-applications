describe("Test the inputs and submit the form", function(){
    beforeEach(function (){
         cy.visit("http://localhost:3001/pizza") 
    })
    it("Add text to inputs and submit form", function(){
       cy.get('input[name="name"]') 
       .type("Hailey")
       .should("have.value", "Hailey");
       cy.get("textarea")
       .type("Please hurry, thanks!")
       .should("have.value", "Please hurry, thanks!");
       cy.get('[type="checkbox"]')
       .check()
       .should("be.checked");
       cy.get('select')
       .select("Small")
       .should("have.value", "Small");
       cy.get("button").click();


    })
})
