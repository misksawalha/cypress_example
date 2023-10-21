describe("DOM functionality",()=>{
        it('Chainging the DOM',()=>{
             cy.visit('https://example.cypress.io/todo')
             cy.get('.todo-button').eq(0).invoke('show')
             cy.contains('a','Active').trigger('mouseover')
        })
        it.only('Get cookies for the current state',()=>{
            cy.visit('https://example.cypress.io/commands/cookies')
            cy.getCookies().should('be.empty')
            cy.get('.set-a-cookie.btn.btn-success').eq(0).contains('button','Set Cookie').click()
            cy.getCookies().should('have.length',1).should((cookies)=>{
               expect((cookies[0])).to.have.property('name','token')
               expect((cookies[0])).to.have.property('value','123ABC')
            })
        })
})