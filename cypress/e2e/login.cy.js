///<reference types="cypress"/>

// antes de cada teste
beforeEach(() => {
     // abrir site
     cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
 
});
  
context('funcionalidade login',() => {
    it('deve fazer login com sucesso',() =>{
    
        //capturar elemento, digita usuário e senha
        cy.get('#username').type(Cypress.env('env_usuario'),{log:false})
        cy.get('#password').type(Cypress.env('env_password'),{log:false})

        //clicar no botão de login
        cy.get('.woocommerce-form > .button').click()
        
        //resultado
        // captura o elemento e verifica se o texto contem o que foi escrito na condição
        cy.get('.page-title').should('contain', 'Minha conta')
    })

    it('login com usuário inválido',() =>{
        
        //capturar elemento, digita usuário e senha
        cy.get('#username').type("aluno_eba@teste.com")
        cy.get('#password').type(Cypress.env('env_password'),{log:false})

        //clicar no botão de login
        cy.get('.woocommerce-form > .button').click()
        
        //resultado
        // captura o elemento e verifica se o texto contem o que foi escrito na condição
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido')
    })

    it('login com senha inválida',() =>{
       
        //capturar elemento, digita usuário e senha
        cy.get('#username').type(Cypress.env('env_usuario'))
        cy.get('#password').type(Cypress.env('env_password_errado'),{log:false})

        //clicar no botão de login
        cy.get('.woocommerce-form > .button').click()
        
        //resultado
        // captura o elemento e verifica se o texto contem o que foi escrito na condição
        cy.get('.woocommerce-error > li').should('contain', 'stá incorreta. Perdeu a senha?')
    })

    it('usuário desconhecido',() =>{
       
        //capturar elemento, digita usuário e senha
        cy.get('#username').type(Cypress.env('env_usuario_desconhecido'))
        cy.get('#password').type(Cypress.env('env_password'),{log:false})

        //clicar no botão de login
        cy.get('.woocommerce-form > .button').click()
        
        //resultado
        // captura o elemento e verifica se o texto contem o que foi escrito na condição
        cy.get('.woocommerce-error > li').should('contain', 'Se você não está certo de seu nome de usuário, experimente o endereço de e-mail.')
    })

})