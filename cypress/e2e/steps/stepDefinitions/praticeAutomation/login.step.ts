import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import loginPage from '../../src/pages/login'
import automationTestPage from '../../src/pages/automationTestPage'

Given('a user is on automation demo page', () => {

    cy.visit('/practice-test-login/')

})

When('inform {string} and {string} data', (user: string, password: string) => {
    loginPage.setUser(user)
    loginPage.setPassword(password)
})

When('click on Login button', () => {
    loginPage.loginBtn()
})

Then('the user will be redirect invenroty page', () => {
    automationTestPage.pageValidation()
})

Then('the user receive message {string}', (message: string) => {
    switch (message) {
        case 'Your username is invalid!':
            loginPage.validateAccess(message)
            break;

        case 'Your password is invalid!':
            loginPage.validateAccess(message)
    }
})