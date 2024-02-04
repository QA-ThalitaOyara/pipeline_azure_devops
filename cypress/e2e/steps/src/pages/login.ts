export default class loginPage {

    static setUser(user:string) {
        cy.get('#username').type(user)
    }
    
    static setPassword(password:string) {
        cy.get('#password').type(password)
    }

    static loginBtn() {
        cy.get('#submit').click()
    }

    static validateAccess(message) {
        cy.get('#error').should('have.text', message)
    }
}