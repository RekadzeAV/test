describe('Восстановление пароля', () => {
  it('Проверка наличия ссылки восстановления пароля', () => {
    cy.visit('/login');

    cy.contains('Забыли пароль?').should('be.visible').click();
    cy.url().should('include', '/password-recovery');
  });
});