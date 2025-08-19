export class  RegisterPage {
  constructor(page) {
    this.page = page;
    this.firstNameInputLoc =page.getByRole('input[placeholder="First Name"]');
    this.lastNameInputLoc =page.getByRole('input[placeholder="Last Name"]');
    this.addressInputLoc =page.getByRole('textarea[ng-model="Adress"]');
    this.emailInputLoc = page.getByRole('input[ng-model="EmailAdress"]');
    this.phoneInputLoc = page.getByRole('input[ng-model="Phone"]');

    
    this.maleRadioLoc = page.getByRole('input[value="Male"]');
    this.femaleRadioLoc =page.getByRole('input[value="FeMale"]');

    
    this.hobbyCricketLoc = page.getByRole('input[value="Cricket"]');
    this.hobbyMoviesLoc = page.getByRole('input[value="Movies"]');
    this.hobbyHockeyLoc = page.getByRole('input[value="Hockey"]');

    
    this.languageDropdownLoc = page.getByRole('#msdd');
    this.languageOptionLoc = (language) => page.getByRole(`li a:has-text("${language}")`);

   
    this.skillsSelectLoc = page.getByRole('#Skills');

    
    this.countrySelectLoc = page.getByRole('#countries');
    this.selectCountryDropdownLoc = page.getByRole('span[role="combobox"]');
    this.selectCountrySearchLoc = page.getByRole('input[role="textbox"]');
    this.selectCountryOptionLoc = (country) => page.getByRole(`li:has-text("${country}")`);

   
    this.yearSelectLoc = page.getByRole('#yearbox');
    this.monthSelectLoc = page.getByRole('select[placeholder="Month"]');
    this.daySelectLoc = page.getByRole('#daybox');

    
    this.passwordInputLoc = page.getByRole('#firstpassword');
    this.confirmPasswordInputLoc = page.getByRole('#secondpassword');

 
    this.submitButtonLoc = page.getByRole('#submitbtn');
  }

  async fillForm(data) {
    await this.firstNameInputLoc.fill(data.firstName);
    await this.lastNameInputLoc.fill(data.lastName);
    await this.addressInputLoc.fill(data.address);
    await this.emailInputLoc.fill(data.email);
    await this.phoneInputLoc.fill(data.phone);

    if (data.gender.toLowerCase() === 'male') {
      await this.maleRadioLoc.check();
    } else {
      await this.femaleRadioLoc.check();
    }

    if (data.hobbies.includes('Cricket')) await this.hobbyCricketLoc.check();
    if (data.hobbies.includes('Movies')) await this.hobbyMoviesLoc.check();
    if (data.hobbies.includes('Hockey')) await this.hobbyHockeyLoc.check();

    await this.languageDropdownLoc.click();
    for (const lang of data.languages) {
      await this.languageOptionLoc(lang).click();
    }
    await this.page.click('body'); 

    await this.skillsSelectLoc.selectOption({ label: data.skills });

    await this.countrySelectLoc.selectOption({ label: data.country });
    await this.selectCountryDropdownLoc.click();
    await this.selectCountrySearchLoc.fill(data.selectCountry);
    await this.selectCountryOptionLoc(data.selectCountry).click();

    await this.yearSelectLoc.selectOption(data.dobYear);
    await this.monthSelectLoc.selectOption(data.dobMonth);
    await this.daySelectLoc.selectOption(data.dobDay);

    await this.passwordInputLoc.fill(data.password);
    await this.confirmPasswordInputLoc.fill(data.password);
  }

  async submit() {
    await this.submitButtonLoc.click();
  }
}
