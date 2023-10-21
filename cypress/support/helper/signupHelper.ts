import userInit from "../initializer/userInit"
const baseUrl = Cypress.config().baseUrl

export const URLs = {
    users: `${baseUrl}/api/users`
}

export default class addUser {
    static addNewUserViaApi() {
        cy.addNewUser(URLs.users,userInit.initUser())
    }
}