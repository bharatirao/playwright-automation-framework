import { test, expect } from '@playwright/test';
const { LoginPage } = require('../../pageobjects/LoginPage');
const { DashboardPage } = require('../../pageobjects/DashboardPage');

test('Login', async ({ page }) => {
  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);

  await login.goto();
  await login.login();

  await expect(dashboard.heading).toContainText('Dashboard');
});
