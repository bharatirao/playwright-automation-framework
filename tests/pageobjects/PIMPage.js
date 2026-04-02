class PIMPage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.addEmployeeLink = page.getByRole('link', { name: 'Add Employee' });
    this.firstNameInput = page.getByRole('textbox', { name: 'First Name' });
    this.middleNameInput = page.getByRole('textbox', { name: 'Middle Name' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
    this.saveButton = page.getByRole('button', { name: 'Save' });
  }

  async openAddEmployee() {
    await this.addEmployeeLink.click();
  }

  async addEmployee(firstName, middleName, lastName) {
    await this.firstNameInput.fill(firstName);
    await this.middleNameInput.fill(middleName);
    await this.lastNameInput.fill(lastName);
    await this.saveButton.click();
  }
}

module.exports = { PIMPage };