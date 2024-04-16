describe('Makes a complete purchase', () => {
  it('Adds items to cart, fill in user details and checkout', () => {
    const firstName = 'tester';
    const lastName = 'new';
    const zip = '96201';

    cy.visit('');
    cy.login(Cypress.env('users').standardUser);

    cy.getBySel('shopping-cart-badge').should('not.exist');
    cy.get('.pricebar .btn')
      .filter(':contains("Add to cart")')
      .and('have.length', 6)
      .then((btns) => {
        cy.wrap(btns.eq(0)).click();
        cy.wrap(btns.eq(1)).click();
      });

    cy.getBySel('shopping-cart-badge').should('contain.text', '2').click();
    cy.getBySel('inventory-item')
      .find('.btn')
      .filter(':contains("Remove")')
      .should('have.length', 2);
    cy.getBySel('checkout').click();

    cy.getBySel('firstName').type(firstName);
    cy.getBySel('lastName').type(lastName);
    cy.getBySel('postalCode').type(zip);
    cy.getBySel('continue').click();

    cy.getBySel('inventory-item').should('have.length', 2);
    cy.getBySel('finish').click();

    cy.getBySel('complete-header').should(
      'contain.text',
      'Thank you for your order!'
    );
    cy.getBySel('shopping-cart-badge').should('not.exist');
    cy.getBySel('back-to-products').click();

    cy.getBySel('inventory-item').should('have.length', 6);
    cy.url().should('contain', 'inventory.html');
  });
});
