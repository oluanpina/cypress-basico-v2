Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function(){
    cy.get('#firstName').type('Luan')
    cy.get('#lastName').type('Pina')
    cy.get('#email').type('luanpina11@hotmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button','Enviar').click()
})
