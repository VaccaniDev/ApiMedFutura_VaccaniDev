# API de Gerenciamento de Pessoas

## Descrição

Esta API foi desenvolvida utilizando AdonisJS com Node em TypeScript e fornece funcionalidades para gerenciar pessoas em um sistema. A aplicação permite criar, buscar, atualizar e excluir pessoas. Além disso, a API permite realizar buscas por termos em vários campos e valida a integridade dos dados fornecidos.

## Banco de Dados

Este projeto foi desenvolvido utilizando PostgreSQL. Se você preferir usar outro banco de dados, ajuste a configuração no arquivo `.env` e nas migrações conforme necessário.

1. Clone o repositório:
    ```sh
    git@github.com:VaccaniDev/ApiMedFutura_VaccaniDev.git
    ```
2. Instale as dependências:
    ```sh
    npm install
    ```
3. Configure o arquivo `.env` com suas credenciais do banco de dados e outras configurações necessárias:
    ```sh
    .env.example .env
    ```
4. Execute as migrações do banco de dados:
    ```sh
    node ace migration:run
    ```
## Usando a API

1. Inicie o servidor:
    ```sh
    node ace serve
    ```
2. Acesse a API através de `http://localhost:3333`.

## Rotas

As rotas da aplicação estão definidas no arquivo `start/routes.ts`. Para facilitar o teste das rotas, você pode importar o arquivo JSON do Insomnia que está incluído neste repositório para o próprio Insomnia.