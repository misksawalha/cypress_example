class Shortlisted {
  elements = {
    addBtn: () => cy.get('.orangehrm-header-container > .oxd-button'),
    shortlisted: () => cy.get('.oxd-button--success'),
    scheduleInterViewBtn: () => cy.get('.oxd-button--success'),
    interViewTitle: () => cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'),
    interViewerName: () => cy.get('.oxd-autocomplete-text-input > input'),
    interviewDate: () => cy.get('.oxd-date-input > .oxd-input'),
    saveBtn: () =>cy.get('.oxd-button--secondary'),
    dropDown: () =>cy.get('.oxd-autocomplete-dropdown > :nth-child(1)'),
    randomCharacters: String.fromCharCode(Math.floor(Math.random() * 26) + 97),
    twoRandomSelector: (Math.random()) < 0.5 ? 2 : 3,
    loader:()=>cy.get('.oxd-loading-spinner'),
    status:()=>cy.get('.orangehrm-recruitment-status > .oxd-text')
  }

  addBtnFunction() {
    this.elements.addBtn().click()
  }

  shortlistedFunction() {
    this.elements.shortlisted().click({ force: true })
  }

  scheduleInterviewBtn() {
    this.elements.scheduleInterViewBtn().click({ force: true })
  }

  fillInterView() {
    this.elements.interViewTitle().type("test")
    this.elements.interViewerName().type(this.elements.randomCharacters).get(`.oxd-autocomplete-dropdown > :nth-child(${this.elements.twoRandomSelector}) > span`).click({ multiple: true })
    this.elements.interviewDate().type("2023-10-12")
    this.elements.saveBtn().click()
    this.elements.loader().should('not.exist')
    this.elements.status().should('contain','Status: Interview Scheduled')
  }
}

export default Shortlisted
