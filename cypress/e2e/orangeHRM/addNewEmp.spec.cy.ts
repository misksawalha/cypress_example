import LoginValidation from "../../pageObject/logIn"; 
import addNewEmp from "../../pageObject/addNewEmp";
const loginObjValidation: LoginValidation = new LoginValidation(); 
let addNewEmpObject:addNewEmp=new addNewEmp()
import PIM from "../../pageObject/pimPage" 
const pimObject: PIM = new PIM(); 
let userName:string = "misk" + Math.floor(Math.random() * 1000).toString();
describe("Login Home Page", () => { 
    beforeEach(function () { 
        cy.fixture('login').as('data') 
        cy.fixture('employeeTable').as('EmpInfo') 
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"); 
        cy.get('@data').then((infoData: any) => { 
            loginObjValidation.fillData(infoData.valid.name, infoData.valid.password) 
            loginObjValidation.checkPage(infoData.valid.message) 
        }) 
    }) 
 
 
    it("Add new Employee via API", () => { 
         
        cy.get('@data').then((infoData: any) => { 
            let firstName=infoData.user.firstName
            pimObject.addNewEmployee(firstName, "naser", "sawallha",userName,"mesho2000")

        }); 
        addNewEmpObject.logoutFunction()
        loginObjValidation.fillData(userName,"mesho2000")
    }) 
 
})