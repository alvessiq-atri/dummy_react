describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Add New Plate").click({ force: true });
    cy.url().should("include", "/add-plate");
    cy.get("#namePlate").type("Testing");
    cy.get('[type="checkbox"]').check("salmon"); // Check checkbox element
    cy.get('[type="radio"]').first().check(); // Check first radio element
  });
});
