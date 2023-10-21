export default class addNewEmp {
       element={
        dropDown:()=>cy.get('.oxd-userdropdown-tab'),
        logout:()=>cy.get(':nth-child(4) > .oxd-userdropdown-link')
       }

       logoutFunction(){
        this.element.dropDown().click()
        this.element.logout().click()
       }
}