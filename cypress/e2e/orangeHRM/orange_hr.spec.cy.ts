import LoginPage from '../../pageObject/loginPage'
import addEmployee from '../../pageObject/pimPage'
//object from the class
const loginObj : LoginPage = new LoginPage();
const employeeObj :addEmployee=new addEmployee()
let random:Number=(Math.random()*1000)
let idResponse:Number;
let flag:Number=0;
describe("Login Home Page", () => {
    beforeEach(function (){
        cy.visit("/web/index.php/auth/login");
       loginObj.login("Admin", "admin123");
    })
  
      it('Add new employee',()=>{
        employeeObj.addNewEmployee('misk','naser','sawallha',`Admin${random}`,'misksawallha2000')
        cy.wait(2500)
        employeeObj.checkEmployee('misk','sawallha')
        employeeObj.fillPersonalDetails()
        employeeObj.addNewJob()
        employeeObj.assignSupervisors()
        employeeObj.employeeListPage()
        employeeObj.checkSearch([{key:"Id",value:"0299"}])
      })
  });
  

