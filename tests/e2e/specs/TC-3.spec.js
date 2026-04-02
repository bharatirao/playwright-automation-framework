import { test, expect } from '@playwright/test';
const { LoginPage } = require('../../pageobjects/LoginPage');
const { DashboardPage } = require('../../pageobjects/DashboardPage');
const { PIMPage } = require('../../pageobjects/PIMPage');

const TESTDATA = {
  firstName: 'Minnie',
  middleName: 'B',
  lastName: 'Rao',
  pageHeader1: 'Dashboard',
  pageHeader2: 'PIM'
};

test('Add User', async ({ page }) => {
  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);
  const pim = new PIMPage(page);

  await login.goto();
  await login.login();

  await expect(dashboard.heading).toContainText(TESTDATA.pageHeader1);

  await dashboard.goToPIM();
  await expect(page.locator('h6')).toContainText(TESTDATA.pageHeader2);

  await pim.openAddEmployee();
  await pim.addEmployee(TESTDATA.firstName, TESTDATA.middleName, TESTDATA.lastName);
}); 