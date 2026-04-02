class DashboardPage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading');
    this.adminLink = page.getByRole('link', { name: 'Admin' });
    this.pimLink = page.getByRole('link', { name: 'PIM' });
  }

  async expectDashboardVisible() {
    await this.heading.filter({ hasText: 'Dashboard' }).first().waitFor({ state: 'visible' });
    await expect(this.heading).toContainText('Dashboard');
  }

  async goToAdmin() {
    await this.adminLink.click();
  }

  async goToPIM() {
    await this.pimLink.click();
  }
}

module.exports = { DashboardPage };