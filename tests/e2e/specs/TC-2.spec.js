import { test, expect } from '@playwright/test';
const { LoginPage } = require('../../pageobjects/LoginPage');
const { DashboardPage } = require('../../pageobjects/DashboardPage');
const { AdminPage } = require('../../pageobjects/AdminPage');

const TESTDATA = {
  jobTitle: 'Program Manager',
  jobDescription: 'Manager',
  pageHeader: 'Dashboard'
};

test('Admin Job Titles - add', async ({ page }) => {
  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);
  const admin = new AdminPage(page);

  await login.goto();
  await login.login();

  await expect(dashboard.heading).toContainText(TESTDATA.pageHeader);

  await dashboard.goToAdmin();
  await admin.openJobTitles();
  // await admin.expectAdminJobBanner();

  await admin.addJobTitle(TESTDATA.jobTitle, TESTDATA.jobDescription);
});