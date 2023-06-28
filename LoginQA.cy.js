
describe('Автотесты на авторизацию', function () {
    it('Верный логин, верный пароль', function () {
         cy.visit('https://login.qa.studio');
         cy.get('#loginButton').should('be.disabled');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#loginButton').should('be.disabled');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').should('be.enabled').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon');
     })
     it('Верный логин, неверный пароль', function () {
        cy.clearAllCookies();
        cy.visit('https://login.qa.studio');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio11');
        cy.get('#loginButton').should('be.enabled').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
    })
    it('Логин без @, верный пароль', function () {
        cy.clearAllCookies();
        cy.visit('https://login.qa.studio');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина');
    })
    it('Забыли пароль', function () {
        cy.clearAllCookies();
        cy.visit('https://login.qa.studio');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('kjshgbnk');
        cy.get('#restoreEmailButton').click();
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина');
    })
    it('Логин не верный, верный пароль', function () {
        cy.clearAllCookies();
        cy.visit('https://login.qa.studio');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('gerjhsg@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина');
    })
    it('Приведение в строчные буквы в логине, верный пароль', function () {
        cy.clearAllCookies();
        cy.visit('https://login.qa.studio');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина');
    })
 })
 