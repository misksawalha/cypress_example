import LoginValidation from "../../pageObject/logIn"; 
const loginObjValidation: LoginValidation = new LoginValidation(); 
describe("Login Home Page", () => { 
    beforeEach(function () { 
        cy.fixture('login').as('data') 
        // cy.fixture('employeeInfo').as('EmpInfo') 
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"); 
        cy.get('@data').then((infoData: any) => { 
            loginObjValidation.fillData(infoData.valid.name, infoData.valid.password) 
            loginObjValidation.checkPage(infoData.valid.message) 
        }) 
    }) 
 
    it("", () => { 
 
cy.visit ("https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate"); 
cy.get('.oxd-input').eq(1).type("misk") 
cy.get('.oxd-input').eq(2).type("nasser") 
cy.get('.oxd-input').eq(3).type("sawallha") 
cy.get(' .oxd-input').eq(4).type("test@gmail.com") 
 cy.get('.oxd-file-div > .oxd-icon').click({force:true}) 
cy.get('input[type=file]').selectFile("cypress/fixtures/test.txt",{force:true}); 
cy.get('.oxd-button--secondary').click({force:true}) 
cy.get('.orangehrm-file-preview',{timeout:30000}).should('contain','test.txt') 
    }); 
})