class AdminPage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.jobMenu = page.getByText('Job', { exact: true });
    this.jobTitlesMenu = page.getByText('Job Titles', { exact: true });
    this.banner = page.getByRole('banner');
    this.addButton = page.getByRole('button', { name: ' Add' });
    this.jobTitleInput = page.getByRole('textbox').nth(1);
    this.jobDescriptionInput = page.getByRole('textbox', { name: 'Type description here' });
    this.saveButton = page.getByRole('button', { name: 'Save' });
  }

//   async openJobTitles() {
//     await this.jobMenu.click();
//     await this.jobTitlesMenu.click();
//   }

async openJobTitles() {
  await this.jobMenu.click();
  await this.page.waitForLoadState('networkidle'); // wait for UI update
  await this.jobTitlesMenu.waitFor({ state: 'visible' });
  await this.jobTitlesMenu.click();
}

  async expectAdminJobBanner() {
    await expect(this.banner).toContainText('Admin / Job');
  }

  async addJobTitle(title, description) {
    await this.addButton.click();
    await this.jobTitleInput.fill(title);
    await this.jobDescriptionInput.fill(description);
    await this.saveButton.click();
  }
}

module.exports = { AdminPage };