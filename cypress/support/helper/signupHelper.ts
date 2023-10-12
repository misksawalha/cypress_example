import { reject, resolve } from "cypress/types/bluebird"
import { IcreateEmployeeResponse } from "../API/response/userApiResponse"
import userInit from "../initializer/userInit"
const baseUrl = Cypress.config().baseUrl

export const URLs = {
    users: `${baseUrl}/api/users`
}

export default class addUser {
    static addNewUserViaApi() {
        return new Cypress.Promise<IcreateEmployeeResponse>((resolve,reject)=>{
            (cy.addNewUser(URLs.users,userInit.initUser())).then(()=>{
                resolve("operation done")
            })
        })
    }
}