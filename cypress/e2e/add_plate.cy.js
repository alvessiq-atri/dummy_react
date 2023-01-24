describe("template spec", () => {
  it("passes", () => {
    //Visit URL
    cy.visit("http://localhost:3000/");

    cy.contains("Add New Plate").click({ force: true });

    //when clicked on button, url should include

    cy.url().should("include", "/add-plate");

    // Get an input, type into it
    cy.get("#namePlate").type("Testing");
    // Check checkbox element
    cy.get('[type="checkbox"]').check("salmon");
    // Check first radio element
    cy.get('[type="radio"]').first().check();
  });
});
