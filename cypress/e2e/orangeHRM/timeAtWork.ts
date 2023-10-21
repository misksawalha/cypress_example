import LoginValidation from "../../pageObject/loginValidation";
const loginObjValidation : LoginValidation = new LoginValidation();
describe("Login Home Page", () => {
    beforeEach(function (){
        cy.visit("/auth/login");
        cy.fixture('login').as('data')
    })

    it("Fill field with valid data",()=>{
        cy.get('@data').then((infoData:any)=>{
            loginObjValidation.fillData(infoData.valid.name,infoData.valid.password)
            loginObjValidation.checkPage(infoData.valid.message)
        })
        cy.contains("p", "Time at Work") 
            .parents().eq(2).should('contain','Today')
            .then(a => { 
                console.log(a) 
            })
    })
})