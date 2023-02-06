
 
### <h1 align="center">Desafio-full-stack-backend-alucard93</h1>


## Install

    yarn install

## Configuração .env

    Criar o arquivo .env(na raiz senão irá ocorrer o erro SCRAM-SERVER-FIRST-MESSAGE: client password must be a string) e configurar como o .env.example


## Migration Run

    linux -  sudo yarn typeorm migration:run -d src/data-source.ts

    windows - yarn typeorm migration:run -d src/data-source.ts
    
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


## Insonmia

    O arquivo Insomnia_2023-02-05.json na raiz desse projeto é o modelo de request collection já com as request confeccionadas no insomnia para utilizá-lo basta:

    * Vá na tela inicial do insonmia click em '+ create'
    IMPORT FROM / + FILE escolha o Insomnia_2023-02-05.json

    basta agora utilizar, Flw!