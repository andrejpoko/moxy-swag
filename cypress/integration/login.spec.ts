describe('Logs user/different users', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('Login functionality - Standard user', () => {
    const headerText = 'Swag Labs';
    cy.login(Cypress.env('users').standardUser);
    cy.get('.app_logo').should('contain.text', headerText);
  });

  it('Bonus: Login test for all users', () => {
    cy.fixture('users').then((users) => {
      users.forEach(
        (user: {
          username: string;
          canLogin: boolean;
          errMessage?: string;
        }) => {
          cy.login(user.username);

          if (user.canLogin) {
            cy.url().should('include', '/inventory.html');
            cy.logout();
          } else {
            if (user.errMessage) {
              cy.contains(user.errMessage).should('be.visible');
            } else {
              throw new Error(
                `Error message is undefined for ${user.username}. (fixtures/user.json)`
              );
            }
            cy.reload();
          }
        }
      );
    });
  });
});
