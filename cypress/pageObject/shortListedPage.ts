class Shortlisted{
      elements={
        addBtn:()=>cy.get('.orangehrm-header-container > .oxd-button'),
        shortlisted:()=>cy.get('.oxd-button--success')
      }

      addBtnFunction(){
        this.elements.addBtn().click()
        }
        shortlistedFunction(){
            this.elements.shortlisted().click({force:true})
        }
}
export default Shortlisted