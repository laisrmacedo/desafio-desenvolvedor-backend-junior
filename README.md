# Backend - Desafio Técnico

## 📝 Descrição

Esta é uma API REST que realiza a inscrição de clientes e armamazena, localmente, o formulário no banco de dados com o servidor PostgreSQL. Foi desenvolvida em TypeScript com alguns conceitos básicos de programação orientada a objetos e arquitetura em camada, visando melhorar a segurança e escalabilidade. Foram utilizadas libs como ExpressJS e KnexJS para facilitar o roteamento e a conexão com o banco de dados. Além disso, foram feitos testes unitários de toda a aplicação.

### Banco de Dados
![table](./src/assets/table.png)
</br>
https://dbdiagram.io/d/6409f841296d97641d86b9e0

### Regras de negócio

1. A inscrição só é realizada com um email válido.
2. Um email só pode ser registrado uma única vez no banco de dados.
3. A propriedade "created_at" deve ser preenchida com a data de inscrição do formulário.


## 💻 Instalação

1. Clone o repositório.
2. No ambiente NodeJS, execute:

  ```sh
  npm install
  ```

3. Crie um arquivo chamado `.env` na raiz do projeto para inserir suas variáveis de ambiente.

  ```sh
  
  #Defina a porta na qual o Express será executado. Exemplo: 3003
  EXPRESS_PORT=3003
  #Defina a porta na qual o PostgreSQL será executado. Exemplo: 5432
  DB_PORT=5432
  #Informe o username relacionado ao banco de dados
  DB_USER=username
  #Informe a senha relacionada ao banco de dados
  DB_PASSWORD=password
  ```

4. Você pode utilizar a extensão MySQL (Weijan Chen) no VSCode para criar a conexão com o banco de dados pelo servidor PostgreSQL.
5. Na conexão, abra a query e execute a criação da tabela 'forms_anwers' através do comando:

  ```sh
  CREATE TABLE forms_answers(  
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      cpf TEXT UNIQUE NOT NULL,
      phone TEXT NOT NULL,
      created_at DATE DEFAULT CURRENT_DATE
  );
  ```

6. Execute o servidor.
  
  ```sh
  npm run dev
  ```

7. Você pode utilizar o Postman para testar a API. Veja mais detalhes na documentação.


## 📜 Documentação

https://documenter.getpostman.com/view/24460805/2s93JrvPxo


## 🕹 Endpoints

- POST: Create Form
- GET: Get Forms Between Dates


## 🛠 Tecnologias Utilizadas

- NodeJS;
- Typescript;
- Express;
- PostgreSQL;
- Knex;
- POO;
- Arquitetura em Camadas;
- Jest;
- Postman.


## 👩‍💻 Autora

Laís Rodrigues Macedo </br>
📧 laisrodriguesmacedo@gmail.com </br>
📞 (+49) 174 7781517

