describe('template spec', () => {

  it('passes', () => {
    // Step 1: Visit the Home page
    cy.visit('http://localhost:3000/');

    // as initially there is no localStorage data, it will be redirected to log in page
    // Step 2: Enter log in details
    cy.wait(2000); // wait for 2 seconds
    cy.url().should('include', 'login'); // the url should contain "login"
    cy.get('input[name="email"]').should('be.visible').clear().type('abc@gmail.com'); // type "abc@gmail.com" as email input
    cy.get('input[name="password"]').should('be.visible').clear().type('12345678'); // type "12345678" as password input

    cy.get('[data-testid="show-password"]').should('be.visible').click(); // button to show password
    cy.wait(2000); // wait for 2 seconds

    cy.get('[data-testid="hide-password"]').should('be.visible').click(); // button to hide password
    cy.wait(2000); // wait for 2 seconds

    cy.get('button[type="submit"]').should('be.visible').click(); // button to submit data

    cy.wait(5000); // wait for 5 seconds

    cy.url().should('include', 'otp'); // URL should contain "otp"

    cy.get('input[name="otp1"]').should('be.visible').clear().type("1"); // enter "1" as the input of first otp input box
    cy.get('input[name="otp2"]').should('be.visible').clear().type("2"); // enter "3" as the input of first otp input box
    cy.get('input[name="otp3"]').should('be.visible').clear().type("3"); // enter "3" as the input of first otp input box
    cy.get('input[name="otp4"]').should('be.visible').clear().type("4"); // enter "4" as the input of first otp input box
    cy.get('input[name="otp5"]').should('be.visible').clear().type("5"); // enter "5" as the input of first otp input box
    cy.get('input[name="otp6"]').should('be.visible').clear().type("6"); // enter "6" as the input of first otp input box

    cy.wait(2000); // wait for 2 seconds

    cy.get("button[type='submit']").should('be.visible').click(); // otp submit button click

    cy.wait(5000); // wait for 5 seconds

    cy.contains('Home').should('be.visible');

    cy.wait(2000); // wait for 2 seconds

    cy.get('button[data-testid="logout"]').should('be.visible').click();

    cy.wait(5000); // wait for 5 seconds
    
    cy.url().should('include', 'login'); // URL should include "login"
  })
})