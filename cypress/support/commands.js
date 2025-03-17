//Sem argumento
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
  cy.get('#firstName').type("Guilherme");
  cy.get('#lastName').type("Dias Ferreira");
  cy.get('#email').type("guilhermedias.ferreira@hotmail.com");
  cy.get('#open-text-area').type('Teste');
  cy.get('button[type="submit"]').click(); //cy.contains('button', 'Enviar').click()
})

//Com objeto 
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data) => {
  cy.get('#firstName').type(data.firstName);
  cy.get('#lastName').type(data.lastName);
  cy.get('#email').type(data.email);
  cy.get('#open-text-area').type(data.text);
  cy.get('button[type="submit"]').click(); //cy.contains('button', 'Enviar').click()
})

//Com 4 argumentos
// Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (nome, sobrenome, email, textoLongo) => {
//   cy.get('#firstName').type(nome);
//   cy.get('#lastName').type(sobrenome);
//   cy.get('#email').type(email);
//   cy.get('#open-text-area').type(textoLongo);
//   cy.get('button[type="submit"]').click(); //cy.contains('button', 'Enviar').click()
// })

//Com valores padrão
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
  firstName: 'Gui',
  lastName: 'Dias', 
  email: 'gui@hotmail.com',
  text: 'Texto'
}) => {
  cy.get('#firstName').type(data.firstName);
  cy.get('#lastName').type(data.lastName);
  cy.get('#email').type(data.email);
  cy.get('#open-text-area').type(data.text);
  cy.get('button[type="submit"]').click(); //cy.contains('button', 'Enviar').click()
})
