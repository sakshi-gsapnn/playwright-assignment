import { test } from '@playwright/test';
import { signUpPage } from './signUpPage.js';
import { RegisterPage } from '../pages/RegisterPage.js';

test('Automate Register Page after signup', async ({ page }) => {
  const signup = new signUpPage(page);
  const register = new RegisterPage(page);

  await signup.launchBrowser();
  await signup.enterEmail('test123@gmail.com');
  await signup.clickIcon();

  
  await page.waitForSelector('input[placeholder="First Name"]');

  const testData = {
    firstName: 'Sakshi',
    lastName: 'Aggarwal',
    address: '123 Gurgaon',
    email: 'test123@gmail.com',
    phone: '9876543210',
    gender: 'Female',
    hobbies: ['Cricket', 'Movies'],
    languages: ['English', 'Hindi'],
    skills: 'Java',
    country: 'India',
    selectCountry: 'India',
    dobYear: '2003',
    dobMonth: 'July',
    dobDay: '2',
    password: 'Test@123',
  };

  await second.fillForm(testData);
  await second.submit();


});