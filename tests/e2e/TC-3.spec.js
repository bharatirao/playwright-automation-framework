import { test, expect } from '@playwright/test';

test('Add User', async ({ page }) => {
//Login to the application
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  //Check dashboard is displayed
  await expect(page.getByRole('heading')).toContainText('Dashboard');

  //Click on PIM -> Add user
  await page.getByRole('link', { name: 'PIM' }).click();
  await expect(page.locator('h6')).toContainText('PIM');
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Minnie');
  await page.getByRole('textbox', { name: 'Middle Name' }).click();
  await page.getByRole('textbox', { name: 'Middle Name' }).fill('B');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Rao');
  await page.getByRole('button', { name: 'Save' }).click();
}) 