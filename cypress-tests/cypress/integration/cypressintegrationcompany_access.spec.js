describe('Доступ к странице "Компания"', () => {
  it('Доступна после входа', () => {
    cy.visit('/');

    cy.get('input[name="email"]').type('dumbledore@sct.team');
    cy.get('input[name="password"]').type('12345678qQ1');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/company');
    cy.contains('Компания').should('be.visible');
  });
});