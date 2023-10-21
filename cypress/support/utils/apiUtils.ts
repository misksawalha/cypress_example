import { IcreateEmployeePayload } from "../API/payload/userApiPayload";
import { IcreateEmployeeResponse } from "../API/response/userApiResponse";

declare  global {
  namespace Cypress{
    interface Chainable{
        // addNewUser: typeof addNewUser
        addNewUser:(requestURL:string,employeePayload:IcreateEmployeePayload)=>Chainable<IcreateEmployeeResponse>
    }
}

}

Cypress.Commands.add('addNewUser',(requestURL:string, userPayload:IcreateEmployeePayload) => {
    return cy.api({
      method: 'POST',
      url: requestURL,
      body: userPayload,
      headers:{
        'Content-Type':'application/json'
      } // Use 'body' instead of 'payload'
    }).its('body')
  });
  