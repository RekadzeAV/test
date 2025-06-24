describe('Проверка руководителя', () => {
  it('Текущий пользователь совпадает с руководителем', () => {
    cy.visit('/');

    cy.get('input[name="email"]').type('dumbledore@sct.team');
    cy.get('input[name="password"]').type('12345678qQ1');
    cy.get('button[type="submit"]').click();

    cy.get('.user-name').invoke('text').then((userName) => {
      cy.get('.manager-name').invoke('text').then((managerName) => {
        expect(userName.trim()).to.eq(managerName.trim());
      });
    });
  });
});