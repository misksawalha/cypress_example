class searchTable{
   
    elements={
        userName:()=>cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div:nth-child(4) > div > div:nth-child(1) > div > div:nth-child(2) > input'),
        password:()=>cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div.oxd-form-row.user-password-row > div > div.oxd-grid-item.oxd-grid-item--gutters.user-password-cell > div > div:nth-child(2) > input'),
        recruitment:()=>cy.get(':nth-child(5) > .oxd-main-menu-item'),
        tableRow:()=>cy.get('.oxd-table-card')
    }

    clickOnRecruitment(){
        this.elements.recruitment().click()
    }
    rowCount(count:Number){
     this.elements.tableRow().should('have.length',count)
    }
}
export default searchTable