describe('Sort items and add to cart', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login(Cypress.env('users').standardUser);
  });

  it('Sorts items from Name (A to Z)', () => {
    const aToZItems: string[] = [];
    cy.getBySel('product-sort-container').select('Name (A to Z)');
    cy.getBySel('inventory-item-name')
      .each(($el) => {
        aToZItems.push($el.text());
      })
      .then(() => {
        const sortedAToZItems = [...aToZItems].sort();
        expect(aToZItems).to.deep.equal(sortedAToZItems);
      });
  });

  it('Sorts items from Name (Z to A)', () => {
    const zToAItems: string[] = [];
    cy.getBySel('product-sort-container').select('Name (Z to A)');
    cy.getBySel('inventory-item-name')
      .each(($el) => {
        zToAItems.push($el.text());
      })
      .then(() => {
        const sortedZToAItems = [...zToAItems].sort().reverse();
        expect(zToAItems).to.deep.equal(sortedZToAItems);
      });
  });

  it('Sorts items from Price (low to high)', () => {
    const lowToHighItems: number[] = [];
    cy.getBySel('product-sort-container').select('Price (low to high)');
    cy.getBySel('inventory-item-price')
      .each(($el) => {
        lowToHighItems.push(Number($el.text().replace(/[^0-9.-]+/g, '')));
      })
      .then(() => {
        const sortedLowToHighItems = [...lowToHighItems].sort((a, b) => a - b);
        expect(lowToHighItems).to.deep.equal(sortedLowToHighItems);
      });
  });

  it('Sorts items from Price (high to low)', () => {
    const highToLowItems: number[] = [];
    cy.getBySel('product-sort-container').select('Price (high to low)');
    cy.getBySel('inventory-item-price')
      .each(($el) => {
        highToLowItems.push(Number($el.text().replace(/[^0-9.-]+/g, '')));
      })
      .then(() => {
        const sortedHighToLowItems = [...highToLowItems].sort((a, b) => b - a);
        expect(highToLowItems).to.deep.equal(sortedHighToLowItems);
      });
  });
});
