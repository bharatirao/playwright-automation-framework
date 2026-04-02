class LoginPage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.username = page.getByRole('textbox', { name: 'Username' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  async login(username = 'Admin', password = 'admin123') {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }
}

module.exports = { LoginPage };