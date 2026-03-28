import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
 //Login to the application
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  //Verify dashboard is displayed
  await page.getByRole('heading', { name: 'Dashboard' }).click();

  //Navigate to Admin -> Job and verify page header is displayed
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByText('Job', { exact: true }).click();
  await page.getByText('Job Titles', { exact: true }).click();
//   await page.getByRole('menuitem', { name: 'Job Titles' }).click();
  await expect(page.getByRole('banner')).toContainText('Admin / Job');

  //Click on Add button and add the job details and save
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('Program Manager');
  await page.getByRole('textbox', { name: 'Type description here' }).click();
  await page.getByRole('textbox', { name: 'Type description here' }).fill('Manager');
  await page.getByRole('button', { name: 'Save' }).click();
});