//add candidate api
//https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates
import searchTable from "../../../pageObject/recordSearch";
import LoginPage from '../../../pageObject/loginPage';
import Shortlisted from "../../../pageObject/shortListedPage";
const loginObj: LoginPage = new LoginPage();
const searchObject: searchTable = new searchTable();
const shortlistedObj : Shortlisted = new Shortlisted()
let id :Number
describe('Shortlisted status', () => {
  beforeEach(function () {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    loginObj.login("Admin", "admin123");
    searchObject.clickOnRecruitment();
    shortlistedObj.addBtnFunction()
  })
  it('add candidate via api',()=>{
    
         cy.request({
            method:'POST',
            url:'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates',
            body:{
                
                email: "misk2000@g.com",
                firstName: "misk",
                lastName: "sawallha",
                vacancyId:4
            }
        })
        .then((response)=>{
          id = response.body.data.id
          cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/${id}`)
          shortlistedObj.shortlistedFunction()

          //
          cy.request({
            method:'PUT',
            url:`https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates/${id}/shortlist`,
        }).then((res)=>{
            
        })
        })
        
    })
})
/*
comment
: 
null
consentToKeepData
: 
false
contactNumber
: 
null
dateOfApplication
: 
"2023-10-14"
email
: 
"misk@g.com"
firstName
: 
"misk"
keywords
: 
null
lastName
: 
"sawallha"
middleName
: 
null
vacancyId
: 
5
*/