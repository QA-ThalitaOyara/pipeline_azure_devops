export default class automationTestPage{
    static pageValidation(){
        cy.get('.post-header').should('contain','Logged In Successfully')
    }
}