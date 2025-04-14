/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", () => {
  // beforeEach(() =>{}) antes de cada teste executa um bloco de código que está aqui dentro.
  beforeEach(() => {
    cy.visit.skip("./src/index.html");
  });
  it.skip("verifica o título da aplicação", () => {
    cy.tit.skiple().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  it.skip("preenche os campos obrigatórios e envia o formulário", () => {
    // Congelando o navegador
    cy.clock();

    // Criei a constnte longText para escrever um texto longo, esse texto irá repetir 10 vezes
    const longText = Cypress._.repeat("abdcdefghijllmnopkrstuvwxyz", 10);

    cy.get('[id="firstName"]').type("Guilherme"); //#firstName - indica que é um id.
    cy.get('[id="lastName"]').type("Dias Ferreira");
    cy.get('[id="email"]').type("guilhermedias.ferreira@hotmail.com");
    cy.get('[id="open-text-area"]').type(longText, { delay: 0 });
    // cy.get('button[type="submit.skip"]') //.button pegar a classe de um elemento não é uma melhor abordagem, pois pode ter vários elementos que usem essa classe e eu n esteja selecionando o elemento que eu quero.
    //   .should("be.visible")
    //   .click();
    cy.contains("button", "Enviar").click();

    cy.get(".success").should("be.visible");

    //Avançar 3s no tempo para verificar se a msg desapareceu
    cy.tick(3000);

    cy.get(".success").should("not.be.visible");
  });

  it.skip("exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", () => {
    cy.clock();

    cy.get('[id="firstName"]').type("Guilherme");
    cy.get('[id="lastName"]').type("Dias Ferreira");
    cy.get('[id="email"]').type("guilhermedias.ferreirahotmail.com");
    cy.get('[id="open-text-area"]').type(
      "Estou testando a aplicação CAC TAT pela automação estou escrevendo nesse input"
    );

    cy.get(".button").click(); //cy.contains('button', 'Enviar').click()

    cy.get(".error").should("be.visible");

    cy.tick(3000);

    cy.get(".error").should("not.be.visible");
  });

  it.skip("verificando que o campo de telefone permanece vazio quando digit.skipo valor não-numérico", () => {
    cy.get("#phone").type("abcde").should("have.value", "");
  });

  it.skip("exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário", () => {
    cy.clock();

    cy.get('[id="firstName"]').type("Guilherme");
    cy.get('[id="lastName"]').type("Dias Ferreira");
    cy.get('[id="email"]').type("guilhermedias.ferreira@hotmail.com");
    cy.get('[id="open-text-area"]').type(
      "Estou testando a aplicação CAC TAT pela automação estou escrevendo nesse input"
    );
    cy.get('[id="phone-checkbox"]').check(); // click() tbm funciona; Porém o check é mais semantico.
    cy.get(".button").click(); //cy.contains('button', 'Enviar').click()

    cy.get(".error").should("be.visible");

    cy.tick(3000);

    cy.get(".error").should("not.be.visible");
  });

  it.skip("preenche e limpa os campos nome, sobrenome, email e telefone", () => {
    cy.get('[id="firstName"]').as("nome").type("Guilherme");
    cy.get("@nome") // é só um exemplo que eu fiz.
      .should("have.value", "Guilherme")
      .clear()
      .should("have.value", "");

    cy.get('[id="lastName"]')
      .type("Dias Ferreira")
      .should("have.value", "Dias Ferreira")
      .clear()
      .should("have.value", "");

    cy.get('[id="email"]')
      .type("guilhermedias.ferreira@hotmail.com")
      .should("have.value", "guilhermedias.ferreira@hotmail.com")
      .clear()
      .should("have.value", "");

    cy.get('[id="phone"]')
      .type("9999999999999")
      .should("have.value", "9999999999999")
      .clear()
      .should("have.value", "");
  });

  it.skip("exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios", () => {
    cy.clock();

    cy.get(".button").click(); //cy.contains('button', 'Enviar').click()

    cy.get(".error").should("be.visible");

    cy.tick(3000);

    cy.get(".error").should("not.be.visible");
  });

  //Para criar um comando customizado preciso ir no diretório cypress/spport/commands.js ou qualquer arquivo que eu criar, dentro desse arquivo crio o comando customizado. Esse arquivo que eu criar precisa ser importado no e2s.js
  it.skip("envia o formulário com sucesso usando um comando customizado", () => {
    // const data = {
    //   firstName: 'Guilherme',
    //   lastName: 'Dias',
    //   email: 'guilhermedias.ferreira@hotmail.com',
    //   text: 'Teste.'
    // }
    // cy.fillMandatoryFieldsAndSubmit.skip(data);

    cy.clock();
    // Chamada com valor padrão
    cy.fillMandatoryFieldsAndSubmit.skip();

    cy.get(".success").should("be.visible");

    cy.tick(3000);

    cy.get(".success").should("not.be.visible");
  });

  // Existe 3 formas de pegar um elemento na lista suspensa: texto do conteúdo, pela propriedade 'value' e pelo indice que vai do 0 em diante
  it.skip("seleciona um produto (YouTube) por seu texto", () => {
    cy.get("select").select("YouTube").should("have.value", "youtube");
    cy.get("select").select("mentoria").should("have.value", "mentoria");
    cy.get("select").select(1).should("have.value", "blog");
    //Texto                        //Propriedade value
    cy.get("select").select("Cursos").should("have.value", "cursos");
  });

  it.skip("seleciona um produto (Mentoria) por seu valor (value)", () => {
    cy.get("select").select("mentoria").should("have.value", "mentoria");
  });

  it.skip("seleciona um produto (Blog) por seu índice", () => {
    //indice fa a verificação pela propriedade 'value'
    cy.get("select").select(1).should("have.value", "blog");
  });

  // Marcando elementos do tipo input Radio
  it.skip('marca o tipo de atendimento "Feedback"', () => {
    cy.get('input[type="radio"]').check("feedback");
  });

  it.skip("marca cada tipo de atendimento", () => {
    cy.get('input[type="radio"]').each((elemento) => {
      //elemento = ta pegando cada um dos elementos do tipo radio (nesse caso 3)
      cy.wrap(elemento) //envolopando cada um dos elementos que está no 'each' e para cada elemento eu faço o 'check' e verifico se foi checado
        .check()
        .should("be.checked");
    });
  });

  it.skip("marca ambos checkboxes, depois desmarca o último", () => {
    // cy.get('input[type="checkbox"]')
    //   .each((elemento) => {
    //     cy.wrap(elemento)
    //       .check()
    //       .should('be.checked')
    //   })
    // cy.get('input[type="checkbox"]')
    //   .last()
    //   .uncheck()

    cy.get('input[type="checkbox"]') //retorna 1 ou mais elementos
      .check() //marca 1 ou mais elementos
      .should("be.checked")
      .last() //último elemento
      .uncheck() //deve ser desmarcado
      .should("not.be.checked");
  });

  // Fazendo upload de arquivos com Cypress
  it.skip("seleciona um arquivo da pasta fixtures", () => {
    cy.get("#file-upload")
      .selectFile("cypress/fixtures/example.json")
      .should((input) => {
        // console.log(input) - Verificando o que o input está retornando e é um Array e através desse Array vou verificar o nome do arquivo
        expect(input[0].files[0].name).to.equal("example.json");
      });
  });

  it.skip("seleciona um arquivo simulando um drag-and-drop", () => {
    cy.get("#file-upload")
      .selectFile("cypress/fixtures/example.json", { action: "drag-drop" }) //simulando o arrastar e soltar
      .should((arquivo) => {
        expect(arquivo[0].files[0].name).to.equal("example.json");
      });
  });

  it.skip("seleciona um arquivo utilizando uma fixture para a qual foi dada um alias", () => {
    cy.fixture("example.json", null).as("myExample");
    cy.get("#file-upload")
      .selectFile("@myExample")
      .should((fixtureArquivo) => {
        expect(fixtureArquivo[0].files[0].name).to.equal("example.json");
      });
  });

  // Lidando com links que abrem em outra aba do navegador
  it.skip("verifica que a política de privacidade abre em outra aba sem a necessidade de um clique", () => {
    cy.contains("a", "Política de Privacidade") // o elemento 'a' é mt generico por isso peguei o texto
      .should("have.attr", "href", "privacy.html") // nesse elemento DEVE TER O ATRIBUTO 'href' para a PÁGINA (nome da pag)
      .and("have.attr", "target", "_blank"); // Mesmo raciocinio de cima
    // Nesse teste não teve a necessidade de realizar cliques, pois esse é o comportamento padrão dos navegadores
  });
  it.skip("acessa a página da política de privacidade removendo o target e então clicando no link", () => {
    cy.contains("a", "Política de Privacidade")
      .invoke("removeAttr", "target") // Estou removendo o atributo 'target' do elemento e simulando que ele está abrindo na mesma página
      .click();
    cy.contains("h1", "CAC TAT - Política de Privacidade").should("be.visible");
  });
});
