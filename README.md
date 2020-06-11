## GoBarber
### NodeJs Rocketseat
#### Esse foi um sistema desenvolvido no bootcamp da rocktseat

Um software como serviço para fornecer um agendamento entre barbeiros e clientes..


## Tecnologias
- Node
- Express
- Express-Session
- Sequelize
- Postgres
- Bcrypt
- Nunjucks
- Multer
- Moment.JS
- Connect-Loki
- Connect-Flash
- dotenv
- Eslint-Airbnb
- Nodemon

## Instalação

clone o projeto com

`git clone https://github.com/PyDecco/backend-gobarber`

Instale a seguinte dependencia

`yarn`


Em seguida, você deve criar seu banco de dados do postgres (ou outro se desejar) e preencher seus próprios campos no arquivo .env.

Agora, você precisa criar tabelas com o comando:

`npx sequelize db:migrate`

Após a configuração do banco de dados, você pode iniciar o servidor com:

`yarn start`

Se você estiver no ambiente de desenvolvimento, poderá usar o servidor de desenvolvimento:

`yarn dev`
