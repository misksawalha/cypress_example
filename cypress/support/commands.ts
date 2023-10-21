// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

declare namespace Cypress{
    
    interface Chainable<Subject>{
        getByPlaceholder: typeof getByPlaceholder,
        logout :typeof logout
    }
}
function getByPlaceholder(placeholder: string){
     return cy.get(`[placeholder=${placeholder}]`)
}
function logout() { 
    //logout 
    cy.get('.oxd-userdropdown-tab').click({ force: true }); 
    return cy.get('.oxd-dropdown-menu').contains('Logout').click({ force: true }); 
} 

Cypress.Commands.add('logout', logout)
Cypress.Commands.add('getByPlaceholder',getByPlaceholder)
