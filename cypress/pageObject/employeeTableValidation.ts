import keyVal from "../support/interface";
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1; // Months are 0-indexed, so add 1
const day = date.getDate();
const formattedDate = `${year}-${month}-${day}`;


export default class employeeTableValidation {
    // selectors
    elements = {
        userName: () => cy.getByPlaceholder("Username"),
        password: () => cy.get('[placeholder = "Password"]'),
        loginBtn: () => cy.get('button'),
        dashBoard: () => cy.get('.oxd-topbar-header-breadcrumb > .oxd-text'),
        pimBtn: () => cy.get(':nth-child(2) > .oxd-main-menu-item'),
        pimAddBtn: () => cy.get('.orangehrm-header-container > .oxd-button'),
        MainMenuItems: () => cy.get('.oxd-sidepanel-body'),
        AddEmp: () => cy.get('.oxd-button--secondary'),
        EmployeeInputName: () => cy.get('.--name-grouped-field'),
        saveNewEmp: () => cy.get('button[type="submit"]'),
        switchLoginDetails: () => cy.get('.oxd-switch-input'),
        confirmPassword: () => cy.get("#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div.oxd-form-row.user-password-row > div > div:nth-child(2) > div > div:nth-child(2) > input"),
        saveBtn: () => cy.get('button[type="submit"]'),
        text: () => cy.get(".orangehrm-edit-employee-name > .oxd-text"),
        datePicker: () => cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input"),
        closeBtn: () => cy.get(".--close"),
        jobButton: () => cy.get(":nth-child(6) > .orangehrm-tabs-item"),
        jobTitleDropDown: () => cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"),
        randomSelector: Math.floor(Math.random() * 5) + 1,
        employmentStatus: () => cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'),
        subUnit: () => cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'),
        jobSaveBtn: () => cy.get('.oxd-form-actions > .oxd-button'),
        jobLoader: () => cy.get('.oxd-loading-spinner'),
        reporToBtn: () => cy.get(':nth-child(9) > .orangehrm-tabs-item'),
        assignSupervisorsBtn: () => cy.get(':nth-child(2) > :nth-child(1) > .orangehrm-action-header > .oxd-button'),
        supervisorsName: () => cy.get('.oxd-autocomplete-text-input > input'),
        randomCharacters: String.fromCharCode(Math.floor(Math.random() * 26) + 97),
        reportingMethod: () => cy.get('.oxd-select-text'),
        twoRandomSelector: (Math.random()) < 0.5 ? 2 : 3,
        reportToSaveBtn: () => cy.get('.oxd-button--secondary'),
        employeeList: () => cy.get('.--visited > .oxd-topbar-body-nav-tab-item'),
        smokeCheckBox: () => cy.get(':nth-child(2) > .oxd-checkbox-wrapper > label'),
        employeeNameSearch: () => cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input'),
        employeeIdSearch: () => cy.get(':nth-child(2) > .oxd-input'),
        employeeListSearchBtn: () => cy.get('.oxd-form-actions > .oxd-button--secondary'),
        fisrtNameInRecord: () => cy.get('.oxd-table-card > .oxd-table-row > :nth-child(3) > div'),
        lastNameRecord: () => cy.get('.oxd-table-card > .oxd-table-row > :nth-child(4) > div')
    }
    //actions
    login(userName: string, password: string) {
        this.elements.userName().type(userName);
        this.elements.password().type(password);
        this.elements.loginBtn().click();
    }
    addNewUser() {
        this.elements.pimBtn().click()
        this.elements.pimAddBtn().click()
    }
    checkPage() {
        this.elements.dashBoard().should('contain', 'Dashboard')
    }
    addNewEmployee(firstName: string, MiddleName: string, LastName: string, user: string, password: string) {
        this.elements.MainMenuItems().contains('PIM').click();
        this.elements.AddEmp().eq(1).click()
        this.elements.EmployeeInputName().children().eq(0).type(firstName)
        this.elements.EmployeeInputName().children().eq(1).type(MiddleName)
        this.elements.EmployeeInputName().children().eq(2).type(LastName)
        this.elements.switchLoginDetails().click()
        this.elements.userName().type(user)
        this.elements.password().type(password)
        this.elements.confirmPassword().type(password)
        this.elements.saveBtn().click()

    }
    checkEmployee(firstName: string, LastName: string) {
        this.elements.text().should('contain', `${firstName} ${LastName}`)
    }
    fillPersonalDetails() {
        this.elements.datePicker().click().clear().type(formattedDate)
        this.elements.closeBtn().click()
        this.elements.smokeCheckBox().click({ force: true })
    }
    addNewJob() {
        this.elements.jobButton().click({ force: true })
        this.elements.jobTitleDropDown().click().get(`:nth-child(${this.elements.randomSelector}) > span`).click({ multiple: true });
        this.elements.employmentStatus().click().get(`:nth-child(${this.elements.randomSelector}) > span`).click({ multiple: true });
        this.elements.subUnit().click().get(`:nth-child(${this.elements.randomSelector}) > span`).click({ multiple: true })
        this.elements.jobSaveBtn().click()

    }
    assignSupervisors() {
        this.elements.jobLoader().should('not.exist');
        this.elements.reporToBtn().click()
        this.elements.assignSupervisorsBtn().click({ force: true })
        this.elements.supervisorsName().type(this.elements.randomCharacters).get(`.oxd-autocomplete-dropdown > :nth-child(${this.elements.twoRandomSelector}) > span`).click({ multiple: true })
        this.elements.reportingMethod().click().get(`.oxd-select-dropdown > :nth-child(${this.elements.twoRandomSelector})`).click({ multiple: true })
        this.elements.reportToSaveBtn().click({ force: true })
        this.elements.jobLoader().should('not.exist');

    }
    employeeListPage() {
        this.elements.employeeList().click()

    }
    checkSearch(arr: keyVal[]) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].key == "Id") {
                this.elements.employeeIdSearch().type(arr[i].value)
                this.elements.employeeListSearchBtn().click({ force: true })
            }
        }
        //    else if (arr[i].key == "EmployeeName") {

        //    }
        //    else if (arr[i].key == "SupervisorName") {

        //    }

    }
    checkEmployeeInfo(firstName: string, lastName: string) {
        this.elements.fisrtNameInRecord().should('contain', firstName)
        this.elements.lastNameRecord().should('contain', lastName)
    }
}