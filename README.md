<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

# Movie Catalog API

## Descrição

Este projeto é uma API RESTful para um catálogo de filmes, protegida por autenticação JWT. Ele inclui operações CRUD para filmes e endpoints de autenticação.

## Ferramentas Utilizadas

- **TypeScript**
- **Nest.js**
- **TypeORM**
- **Swagger**
- **Docker**
- **Redis**
- **PostgreSQL**

## Instalação

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
# Para iniciar o projeto começamos com esses passos abaixo
# Instale o NestJS CLI globalmente (se ainda não tiver)
npm install -g @nestjs/cli

# Inicialize um novo projeto NestJS (caso ainda não tenha feito)
nest new movie-catalog

# Navegue até o diretório do projeto
cd movie-catalog

# Dependências de Produção
npm install @nestjs/common @nestjs/core @nestjs/jwt @nestjs/passport @nestjs/swagger @nestjs/typeorm bcrypt class-transformer class-validator jsonwebtoken passport passport-jwt pg reflect-metadata rxjs typeorm

# Dependências de Desenvolvimento
npm install --save-dev @nestjs/cli @nestjs/schematics @nestjs/testing @types/bcrypt @types/jest @types/node @types/passport-jwt @types/pg @types/supertest jest prettier source-map-support supertest ts-jest ts-loader ts-node tsconfig-paths typescript

# Adicione as dependências ao seu projeto NestJS
nest add @nestjs/jwt
nest add @nestjs/passport
nest add @nestjs/swagger
nest add @nestjs/typeorm
## Support

##Para testar a API clique no link abaixo:
[TESTE-AQUI](https://movie-catalog-app-11f56a055da0.herokuapp.com/api#/auth/AuthController_login)

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Hélio Franklin](https://www.linkedin.com/in/helio-franklin-293bb9119/)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
