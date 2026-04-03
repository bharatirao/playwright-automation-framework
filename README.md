# Playwright Automation Framework

A **modern test automation framework** built with **JavaScript, Node.js, and Playwright**, designed for **cross-browser end-to-end testing**. Integrated with **Jenkins CI/CD pipelines** and **Slack notifications** to provide **real-time test results and reports**.  

---

## **Features**

- Cross-browser testing: Chromium, Firefox, WebKit, and Chrome (channel).  
- Page Object Model (POM) structure for maintainable test scripts.  
- UI integrated tests for faster and more reliable automation.  
- CI/CD integration with Jenkins for automated builds.  
- Slack notifications for success/failure with test summary and report link.  
- HTML reports archived in Jenkins for easy review.  
- Parallel test execution for reduced runtime.  

---

---

## **Prerequisites**

- Node.js (v16 or above recommended)  
- npm  
- Playwright  
- Jenkins (for CI/CD)  
- Slack Workspace + Webhook URL (for notifications)  

---

## **Setup & Installation**

1. Clone the repository:
```bash
git clone https://github.com/bharatirao/playwright-automation-framework.git
cd playwright-automation-framework

2.Install Dependencies
 npm install
npx playwright install

3. Run tests for a specific browser:
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
npx playwright test --project="Google Chrome"

4. Run all tests in parallel
npx playwright test

Jenkins CI/CD Integration

The Jenkinsfile includes the following stages:

Clean – Deletes workspace before each build.
Checkout – Clones the GitHub repository.
Install Dependencies – Installs Node.js packages and Playwright browsers.
Run Tests in Parallel – Executes tests in Chromium, Firefox, WebKit, and Chrome in parallel.
Publish Report – Generates and archives HTML reports.
Slack Notifications – Sends detailed success/failure notifications with test summary and report link.

Slack Notifications
Sends success/failure notifications to your configured Slack channel.
Includes test summary per browser and a link to the HTML report.
Example Slack message:
✅ Build SUCCESS: Playwright-Automation #12
Chromium: 10 passed, 0 failed
Firefox: 9 passed, 1 failed
Webkit: 10 passed, 0 failed
Chrome: 10 passed, 0 failed
HTML Report: http://jenkins.company.com/job/Playwright-Automation/12/playwright-report/index.html

Reporting
HTML reports are published and archived in Jenkins for each build.
