# RH SOLUTION

Projeto CRUD Funcionario - NestJS
Backend simples para gerenciar funcionários com CRUD completo usando NestJS e TypeORM.

## Funcionalidades
Criar, listar, buscar por ID, atualizar e deletar funcionários
Consulta específica por cargo (GET /funcionarios/cargo/:cargo)

## Tecnologias
NestJS
TypeORM
PostgreSQL

## Entidade Funcionario
Atributos:
id (gerado automaticamente)
nome
email
cargo
dataAdmissao

## Configuração
Configure o banco de dados PostgreSQL no arquivo app.module.ts (usuário, senha, host, porta, database).
Execute o projeto com:

## Instalação
    npm install
    npm run start
