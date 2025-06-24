describe('Авторизация', () => {
  it('Успешный вход в систему', () => {
    cy.visit('/');

    cy.get('input[name="email"]').type('dumbledore@sct.team');
    cy.get('input[name="password"]').type('12345678qQ1');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/company');
    cy.contains('Компания').should('be.visible');
  });

  it('Ошибка при неверном логине или пароле', () => {
    cy.visit('/');

    cy.get('input[name="email"]').type('wrong@example.com');
    cy.get('input[name="password"]').type('wrongpassword');
    cy.get('button[type="submit"]').click();

    cy.contains('Неверный логин или пароль').should('be.visible');
  });
});