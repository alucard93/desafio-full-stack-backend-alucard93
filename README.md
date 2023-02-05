
 
### <h1 align="center">esafio-full-stack-backend-alucard93</h1>


## Install

    yarn install

## Configuração .env

    Criar o arquivo .env e configurar como o .env.example

## Migration

    linux - sudo yarn typeorm migration:generate src/migrations/client -d src/data-source.ts

    windows - yarn typeorm migration:generate src/migrations/client -d src/data-source.ts

## Migration Run

    linux -  sudo api yarn typeorm migration:run -d src/data-source.ts

    windows - 

## Startar aplicação

    linux: -  sudo yarn dev
    windows - yarn dev


## Rotas

* POST /users
* POST /login
* GET /users
* PATCH /users/:id
* DELETE /users/:id
* POST /contacts
* GET /contacts
* PATCH /contacts/:id
* DELETE /contacts/:id
