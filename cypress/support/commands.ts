// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getBySel', (selector, ms?) =>
  cy.get(`[data-test="${selector}"]`, { timeout: ms })
);

Cypress.Commands.add('login', (username) => {
  cy.getBySel('username').clear().type(username);
  cy.getBySel('password').clear().type(Cypress.env('password'));
  cy.getBySel('login-button').click();
});

Cypress.Commands.add('logout', () => {
  cy.getBySel('primary-header').find('.bm-burger-button').click();
  cy.getBySel('logout-sidebar-link').click();
  cy.url().should('eq', 'https://www.saucedemo.com/');
});
