import searchTable from "../../../pageObject/recordSearch";
import LoginPage from '../../../pageObject/loginPage';
import Shortlisted from "../../../pageObject/shortListedPage";

// Note: TypeScript type annotations can be inferred automatically; you don't need to specify types.
const loginObj = new LoginPage();
const searchObject = new searchTable();
const shortlistedObj = new Shortlisted();

let id: number;

describe('Shortlisted status', () => {
  beforeEach(function () {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    loginObj.login("Admin", "admin123");
    searchObject.clickOnRecruitment();
    shortlistedObj.addBtnFunction();
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
      id = response.body.data.id;

      // Visit the URL with the new candidate ID
      cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/${id}`);
      shortlistedObj.shortlistedFunction();

      // Use 'cy.wrap()' to work with 'id' from the outer scope
      cy.wrap(id).then((idResponse) => {
        cy.request({
          method: 'PUT',
          url: `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates/${idResponse}/shortlist`,
          body: {
            note: '',
          },
        }).then((response) => {
          expect(response.status).to.eq(200);
          cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/${idResponse}`);
        }).then(()=>{
          shortlistedObj.scheduleInterviewBtn()
          shortlistedObj.fillInterView()
        });
      });
    });
  });
});
