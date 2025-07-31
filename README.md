# 🧾 RH Solution

**Sistema de Gerenciamento de Funcionários - NestJS**

Bem-vindo ao **RH Solution**, um projeto backend desenvolvido com **NestJS** e **TypeORM**, focado na gestão de funcionários de forma prática, organizada e eficiente. Este sistema oferece uma API robusta com operações CRUD completas e consultas específicas por cargo, ideal para aplicações de recursos humanos.

---

## ⚙️ Funcionalidades

- Criar um novo funcionário  
- Listar todos os funcionários  
- Buscar funcionário por ID  
- Atualizar informações de um funcionário  
- Remover funcionário do sistema  
- Consultar funcionários por cargo: `GET /funcionarios/cargo/:cargo`

---

## 🛠️ Tecnologias Utilizadas

- NestJS — Framework moderno e escalável para Node.js  
- TypeORM — ORM para integração com bancos de dados  
- PostgreSQL — Banco de dados relacional open-source

---

## 🧩 Entidade: Funcionário

A entidade principal do sistema possui os seguintes atributos:

- `id` — Identificador único (gerado automaticamente)  
- `nome` — Nome completo do funcionário  
- `email` — E-mail corporativo  
- `cargo` — Cargo atual na empresa  
- `dataAdmissao` — Data de admissão na empresa

---

## ⚙️ Configuração do Banco de Dados

Antes de iniciar a aplicação, configure a conexão com o banco de dados PostgreSQL. No arquivo `app.module.ts`, adicione o seguinte:

```ts
TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'seu_usuario',
  password: 'sua_senha',
  database: 'rh_solution',
  autoLoadEntities: true,
  synchronize: true,
});
```

---

## 🚀 Como Rodar o Projeto

### Instalação

```bash
npm install
```

### Execução

```bash
npm run start
```

---

## 🔔 Importante

- O banco **`rh_solution`** deve estar criado no PostgreSQL.  
- O parâmetro **`synchronize: true`** é útil para desenvolvimento (cria as tabelas automaticamente), mas **não deve ser usado em produção**.

---

## 📬 Endpoints Disponíveis

| Método | Rota                            | Descrição                        |
|--------|--------------------------------|---------------------------------|
| GET    | /funcionarios                  | Lista todos os funcionários      |
| GET    | /funcionarios/:id              | Busca funcionário por ID         |
| POST   | /funcionarios                  | Cria um novo funcionário         |
| PUT    | /funcionarios/:id              | Atualiza dados do funcionário    |
| DELETE | /funcionarios/:id              | Remove funcionário do sistema    |
| GET    | /funcionarios/cargo/:cargo     | Filtra funcionários por cargo    |
