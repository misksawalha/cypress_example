import employeeTableValidation from '../../pageObject/employeeTableValidation'

let employeeObj:employeeTableValidation = new employeeTableValidation()
let id:string = 400+( Math.floor(Math.random() * 101)).toString()
let responseEmployeeNumber:Number;
let employeeID:any;
let random:Number=(Math.random()*1000)
describe('Employee table data validation ', () => {
    beforeEach(function (){
        cy.visit("/web/index.php/auth/login");
        employeeObj.login('Admin','admin123')
        employeeObj.addNewUser()
        cy.request({
            method:'POST',
            url:'/web/index.php/api/v2/pim/employees',
            body:{
                employeeId: id,
                firstName: "misk",
                lastName: "sawallha",
                middleName: "naser"
            }
        })
        .then((response)=>{
            console.log(response)
            responseEmployeeNumber = response.body.data.empNumber
            employeeID= (response.body.data.employeeId).toString()
            console.log(responseEmployeeNumber)
           expect(response).property('status').to.equal(200)
           cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/${responseEmployeeNumber}`)
           console.log(employeeID)
        })
        cy.fixture('employeeTable').as('employeeValidation')
    })
    it('Add employee data',()=>{
        employeeObj.checkEmployee('misk','sawallha')
        employeeObj.fillPersonalDetails()
        employeeObj.addNewJob()
        employeeObj.assignSupervisors()
        employeeObj.employeeListPage()
        employeeObj.checkSearch([{key:"Id",value:employeeID}])
        cy.get('@employeeValidation').then((infoData:any)=>{
             employeeObj.checkEmployeeInfo(infoData.firstNameAndMiddleName,infoData.lastName)
        })
    })
})