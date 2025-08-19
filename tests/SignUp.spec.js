const { test } = require('@playwright/test');
const SignupPage = require('./signupPage');

test('Sign up with email and navigate to second page', async ({ page }) => {
  const signup = new SignupPage(page);

  await signup.goto();
  await signup.enterEmail('test123@gmail.com');
  await signup.clickSignup();


  await page.waitForURL('**/RegisterPage**');
});