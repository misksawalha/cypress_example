
class LoginValidation {

    elements = {
        userName: () => cy.getByPlaceholder("Username"),
        password: () => cy.get('[placeholder = "Password"]'),
        loginBtn: () => cy.get('button'),
        dashBoard: () => cy.get('.oxd-topbar-header-breadcrumb > .oxd-text'),
        errorMessage: () => cy.get('.oxd-alert'),
        emptyAlert: () => cy.get('.orangehrm-login-slot'),
        emptyUserName: () => cy.get('.oxd-input-group > .oxd-text').parent().should('contain', 'username'),
        emptyPassword: () => cy.get('.oxd-input-group > .oxd-text'),
    }

    fillData(name: string, password: string) {
        if (name == "" && password == "") {
            this.elements.loginBtn().click()
        }
        else if (name == "") {
            this.elements.password().type(password)
            this.elements.loginBtn().click()
        }
        else if (password == "") {
            this.elements.userName().type(name)
            this.elements.loginBtn().click()
        }
        else {
            this.elements.userName().type(name)
            this.elements.password().type(password)
            this.elements.loginBtn().click()
        }
    }
    checkPage(message: string) {
        if (message == "Dashboard") {
            this.elements.dashBoard().should('contain', message)
        }
        else if (message == "Invalid credentials") {
            this.elements.errorMessage().should('contain', message)
        }
        else if(message == 'Required'){
            this.elements.emptyAlert().should('contain', message)
        }
    }
    checkHiddenPassword(){
        this.elements.password().should('have.attr','type','password')
    }
}
export default LoginValidation