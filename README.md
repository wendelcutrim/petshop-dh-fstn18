# petshop-dh-fnts18

## Atividades

O nosso cliente tem um petshop e gostaria de criar uma aplicação onde seja possível falar mais sobre a sua empresa e que seja possível cadastrar os pets que estão disponível para adoção e os serviços realizados pelo petshop.

As tecnologias que devem ser utilizadas para este projeto são:

**Front-end**: EJS (HTML, JavaScript), CSS
**Back-end**: Javascript, Express

-   **Arquitetura**: MVC

**_Obs_**: Está liberado usar algum framework CSS caso queira.

#

### **Atividade 01 - Criação do servidor**

Nesta atividade iremos criar o servidor, instalar as principais dependências que iremos utilizar no projeto, e estruturar o projeto na arquitetura MVC.

**Tempo para realizar essa atividade: 10 minutos**

Para atingir esse objetivo será necessário:

-   [ ] Iniciar um projeto node
-   [ ] Instalar o express
-   [ ] Criar a estrutura utilizando o padrão MVC
-   [ ] Criar uma pasta chamada **database** e dentro desta pasta criar o arquivo `db.json`
-   [ ] Instalar o nodemon como dependência de desenvolvimento
-   [ ] Criar scripts para startar a aplicação, deve conter os seguintes scripts:
    -   [ ] **start**: A aplicação deve rodar utilizando pelo **_node_**
    -   [ ] **dev**: A aplicação deve rodar utilizando o **_nodemon_**
-   [ ] Criar o entry point da aplicação com o nome `app.js`, configurar o servidor e criar a rota `/` que quando for solicitada deve enviar a seguinte mensagem (text ou json): **Express Works!**

#

### **Atividade 02 - Criação de rotas, controllers e configurando o template engine**

Nesta atividade iremos criar as rotas do nosso servidor, criar os controllers e configurar o nosso template engine.

**Tempo para realizar essa atividade: 10 minutos**

Para atingir esse objetivo será necessário:

-   [ ] Instalar o ejs.
    -   Documentação do ejs: https://ejs.co/
-   [ ] Configurar o servidor para trabalhar com o template engine ejs
-   [ ] Informar ao servidor aonde está a nossa pasta de views
-   [ ] Configurar o servidor para que todas as reqisições seja em JSON
-   [ ] Informar ao servidor a pasta de arquivos estáticos (public)
-   [ ] Alterar a extensão das views de `.html` para `.ejs`

**Obs: Fique de olho nas importações dos arquivos das views, pois já informarmos para o servidor que ele tem uma pasta de arquivos públicos, ou seja, não precisamos passar o path para ir até ela**

-   [ ] Criar a pasta de rotas. Dentro da pasta de rotas criar os arquivos que achar necessários para rotas.
-   [ ] Na pasta de rotas criar o arquivo: `home.js` onde deve ter as seguintes rotas:

| Route      | Method | Description                       |
| :--------- | :----- | :-------------------------------- |
| `/`        | GET    | Deve renderizar a view `index`    |
| `about`    | GET    | Deve renderizar a view `sobre`    |
| `login`    | GET    | Deve renderizar a view `login`    |
| `contact`  | GET    | Deve renderizar a view `contato`  |
| `services` | GET    | Deve renderizar a view `servicos` |

-   [ ] Criar o controller para tratar estas rotas
