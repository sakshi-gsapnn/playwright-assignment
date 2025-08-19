export class signUpPage {
    constructor(page) {
        this.page = page
        this.EmailTxtFieldLoc = page.getByRole('textbox', { name: 'Email id for Sign Up' })
        this.IconLoc = page.getByRole('link', { name: 'logo' })
    }
 
    async launchBrowser() {
        await this.page.goto('https://demo.automationtesting.in/');
    }
 
    async enterEmail(email) {
        await this.EmailTxtFieldLoc.fill(email)
    }
 
    async clickIcon() {
        await this.IconLoc.click()
    }
}