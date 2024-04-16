declare namespace Cypress {
  interface Chainable {
    getBySel(selector: string, ms?: number): Chainable<JQuery<HTMLElement>>;
    login(username: string): Chainable<void>;
    logout(): Chainable<void>;
  }
}
