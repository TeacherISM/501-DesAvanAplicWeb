/// <reference types="cypress" />

/**
 * Author: Nicole Dávila Hernández
 * 
 * Description: These tests validate the functionality of the RBAC login system.
 * It tests successful logins (admin and user), failed logins, and form validation.
 */

describe('Login Page', () => {

  const loginPageUrl = '/public/A01028517/Milestone3/A01784217/end2end_tests.html';

  /**
   * Before each test:
   * 1. Visits the login page
   * 2. Verifies the page loaded correctly
   * 3. Checks that required elements exist
   */

  beforeEach(() => {

    cy.visit(loginPageUrl, { timeout: 10000 });
    
    // Basic page structure verification
    cy.get('body').should('exist'); // Check if page loaded at all
    cy.get('#end2end_tests').should('exist').and('not.be.empty'); // Check React root element
    cy.contains('h2', 'Login').should('exist'); // Verify login form header
  });

  /**
   * Test: Successful admin login
   * 1. Fills in admin credentials
   * 2. Submits the form
   * 3. Verifies the correct welcome message appears
   */

  it('should log in with valid admin credentials', () => {
    cy.get('input[name="username"]').type('admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    
    // Verify the alert popup contains the correct message
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Bienvenido administrador. Acceso completo.');
    });
  });

  /**
   * Test: Successful regular user login
   * 1. Fills in user credentials
   * 2. Submits the form
   * 3. Verifies the correct welcome message appears
   */

  it('should log in with valid user credentials', () => {
    cy.get('input[name="username"]').type('user');
    cy.get('input[name="password"]').type('user123');
    cy.get('button[type="submit"]').click();
    
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Bienvenido usuario. Acceso limitado.');
    });
  });

  /**
   * Test: Failed login attempt
   * 1. Fills in invalid credentials
   * 2. Submits the form
   * 3. Verifies the error message appears
   */

  it('should display an error message with invalid credentials', () => {
    cy.get('input[name="username"]').type('wronguser');
    cy.get('input[name="password"]').type('wrongpass');
    cy.get('button[type="submit"]').click();
    cy.get('.error').should('contain', 'Credenciales inválidas');
  });

  /**
   * Test: Empty form submission
   * 1. Submits the form without entering credentials
   * 2. Verifies the error message appears
   */
  
  it('should show validation for empty form submission', () => {
    cy.get('button[type="submit"]').click();
    cy.get('.error').should('contain', 'Credenciales inválidas');
  });
});