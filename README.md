# Task Manager Application

Este é um aplicativo de gerenciamento de tarefas desenvolvido com o framework NestJS.

## Descrição

O Task Manager é uma aplicação que permite aos usuários criar, visualizar, atualizar e excluir tarefas. Ele fornece uma interface simples e intuitiva para o gerenciamento eficiente de suas tarefas diárias.

## Funcionalidades

- Criação de tarefas com título, descrição e status de conclusão
- Visualização de todas as tarefas existentes
- Visualização de uma tarefa específica pelo seu ID
- Atualização de informações de uma tarefa existente
- Exclusão de uma tarefa

## Tecnologias Utilizadas

- Node.js
- NestJS
- TypeScript
- TypeORM
- SQLite (banco de dados)

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

2. Instale o repositório:

``` cd nome-do-repositorio
npm install
```

3. Configure o banco de dados:

- O aplicativo está configurado para usar o banco de dados SQLite por padrão.
- Certifique-se de ter o SQLite instalado em sua máquina.
- Edite o arquivo src/app.module.ts e ajuste as configurações do banco de dados, se necessário.

4. Execute a aplicação:

``` 
npm run start:dev
```
O aplicativo será executado em http://localhost:3000.

## Testes
Para executar os testes unitários:

``` 
npm run start:dev
```
Para executar os testes de integração:

``` 
npm run test:e2e
```

5. Use a aplicação:
Importe o arquivo `api_collection.json` no Postman ou similares e teste a API REST
