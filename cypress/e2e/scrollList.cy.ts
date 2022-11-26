describe("tests for ScrollList", () => {
  it("should render ", () => {
    cy.visit("/iframe.html?id=example-scrolllist--list");
    cy.get(".item").should("have.length", 3);
    cy.get(".scrollList").scrollTo("bottom");
    cy.get(".item").should("have.length", 6);
    cy.get(".scrollList").scrollTo("bottom");
    cy.get(".item").should("have.length", 9);
    cy.get(".scrollList").scrollTo("bottom");
    cy.get(".item").should("have.length", 10);
  });
});

export {};
