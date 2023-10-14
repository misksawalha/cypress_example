import searchTable from "../../pageObject/recordSearch";
import LoginPage from '../../pageObject/loginPage';

const loginObj: LoginPage = new LoginPage();
const searchObject: searchTable = new searchTable();
let totalNumber:Number
describe('Records Found', () => {
  beforeEach(function () {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  })

  it('login and check record count', () => {
    loginObj.login("Admin", "admin123");
    searchObject.clickOnRecruitment();

    cy.get('.oxd-main-menu-item').eq(4).click({force:true}) 
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates?limit=50&offset=0&model=list&sortField=candidate.dateOfApplication&sortOrder=DESC').as('CR'); 
    cy.wait('@CR').then((resp) => { 
        totalNumber = resp.response.body.meta.total
        searchObject.rowCount(totalNumber)
    }) 
    
  });
});
