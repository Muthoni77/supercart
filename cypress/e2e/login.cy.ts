import { render, screen } from "@testing-library/react";
import "@testing-library/cypress";

describe("Login flow", async () => {
  it("Has proper login flow", () => {
    //Visit the login page
    cy.visit("http://localhost:3000/auth/login");

    //Both inputs exist
    cy.get("#email").type("jbaraza46@gmail.com");
    // cy.get("#password").type("1234567");
    cy.findByPlaceholderText(/password/i).type("1234567");

    //click login
    cy.findByRole("button", {
      name: /login/i,
    }).click();
  });
});
