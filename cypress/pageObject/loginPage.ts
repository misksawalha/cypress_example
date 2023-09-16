export default class loginPage {
    // selectors
    elements = {
        userName: () => cy.getByPlaceholder("Username"),
        password: () => cy.get('[placeholder = "Password"]'),
        loginBtn: () => cy.get('button'),
        forgetPassword: () => cy.get('.orangehrm-login-forgot'),
        forgetUserName: () => cy.getByPlaceholder("Username"),
        resetPassword: () => cy.get('[type="submit"]'),
        message: () => cy.get('.orangehrm-forgot-password-title'),
        msg: "Reset Password link sent successfully"
    }
    //actions
    login(userName: string, password: string) {
        this.elements.userName().type(userName);
        this.elements.password().type(password);
        this.elements.loginBtn().click();
    }
    //reset password
    resetPassword(forgetUserName: string) {
        this.elements.forgetPassword().click()
        this.elements.forgetUserName().type(forgetUserName);
        this.elements.resetPassword().click()
        this.elements.message().should('contain', this.elements.msg)
    }
}