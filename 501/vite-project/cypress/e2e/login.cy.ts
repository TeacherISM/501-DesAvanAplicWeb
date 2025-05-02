/// <reference types="cypress" />

describe('Login Page', () => {
    beforeEach(() => {
      cy.visit('/end2end_tests.html'); // Make sure your app is running and this route exists
    });
  
    it('should log in with valid admin credentials', () => {
      cy.get('input[name="username"]').type('admin');
      cy.get('input[name="password"]').type('admin123');
      cy.get('button[type="submit"]').click();
      
      // Verify the alert message
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Bienvenido administrador. Acceso completo.');
      });
    });
  
    it('should log in with valid user credentials', () => {
      cy.get('input[name="username"]').type('user');
      cy.get('input[name="password"]').type('user123');
      cy.get('button[type="submit"]').click();
      
      // Verify the alert message
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Bienvenido usuario. Acceso limitado.');
      });
    });
  
    it('should display an error message with invalid credentials', () => {
      cy.get('input[name="username"]').type('wronguser');
      cy.get('input[name="password"]').type('wrongpass');
      cy.get('button[type="submit"]').click();
      cy.get('.error').should('contain', 'Credenciales inválidas');
    });
  
    it('should show validation for empty form submission', () => {
      cy.get('button[type="submit"]').click();
      cy.get('.error').should('contain', 'Credenciales inválidas');
    });
  });
  