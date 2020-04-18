<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />

<h3 align="center">
  Projeto para Controle Financeiro em Node.js com Typescript
</h3>

<p align="center">“Para quem fica melhor a cada dia, ficar pronto é utopia”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafios?color=%2304D361">

  <a href="https://github.com.br/mnzsss">
    <img alt="Made by Gabriel Menezes" src="https://img.shields.io/badge/made%20by-mnzsss-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
</p>

## :rocket: Sobre o desafio

Criar uma aplicação para continuar treinando Node.js junto ao TypeScript, utilizando o conceito de models, repositories e services!

Essa aplicação é responsável por armazenar transações financeiras de entrada e saída, que deve permitir o cadastro e a listagem dessas transações.

### Rotas da aplicação

- **`POST /transactions`**: A rota recebe `title`, `value` e `type` dentro do corpo da requisição, sendo `type` o tipo da transação, que deve ser `income` para entradas (depósitos) e `outcome` para saidas (retiradas).

- **`GET /transactions`**: Essa rota deve retornar uma listagem com todas as transações que você cadastrou até agora, junto com o valor de soma de entradas, retiradas e total de crédito.

### Específicação dos testes

Para esse desafio temos os seguintes testes:

- **`should be able to create a new transaction`**: A aplicação deve permitir que uma transação seja criada, e retorne um json com a transação criado.

- **`should be able to list the transactions`**: A aplicação deve permitir que seja retornado um objeto contendo todas as transações junto ao balanço de income, outcome e total das transações que foram criadas até o momento.

- **`should not be able to create outcome transaction without a valid balance`**: A aplicação não deve permitir que uma transação do tipo `outcome` extrapole o valor total que o usuário tem em caixa, retornando uma mensagem de erro.

---

Feito com 💜 by Gabriel Menezes :wave:
