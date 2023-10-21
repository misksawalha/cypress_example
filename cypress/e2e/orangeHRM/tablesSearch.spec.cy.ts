import searchTable from "../../pageObject/recordSearch";
import LoginPage from '../../pageObject/loginPage';
import Shortlisted from "../../pageObject/shortListedPage";
import searchInTables from "../../pageObject/tableSearch";
// Note: TypeScript type annotations can be inferred automatically; you don't need to specify types.
const loginObj = new LoginPage();
const searchObject = new searchTable();
const shortlistedObj = new Shortlisted();
const searchInTablesObj = new searchInTables()
describe('search', () => {
  beforeEach(function () {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    loginObj.login("Admin", "admin123");
    searchObject.clickOnRecruitment();

  });

  it('add candidate via API', () => {
    cy.request({
      method: 'POST',
      url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates',
      body: {
        email: "misk2000@g.com",
        firstName: "misk",
        lastName: "sawallha",
        vacancyId: 4,
      },
    }).then((response) => {
      console.log(response.body.data)
      cy.get('.orangehrm-container')
        .find('.oxd-table-body .oxd-table-row')
        .each(($row) => {
          cy.wrap($row)
            .contains('misk', { timeout: 10000 }) // Increase the timeout
        });

    })
  })
})