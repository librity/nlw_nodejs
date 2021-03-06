# Net Promoter Score API

A basic NPS api with NodeJS, Typescript and Typeorm.

## Endpoints

`UsersController`

- `POST` http://localhost:3333/users

`SurveysController`

- `GET` http://localhost:3333/surveys
- `POST` http://localhost:3333/surveys

`SurveyAnswersController`

- `POST` http://localhost:3333/survey_answers
- `GET` http://localhost:3333/survey_answers/:id/answer/:value

`NpsController`

- `GET` http://localhost:3333/nps/:survey_id

## Docs and Resources

App:

- https://nodejs.org/dist/latest-v14.x/docs/api/
- https://expressjs.com/en/4x/api.html
- https://support.insomnia.rest/
- https://github.com/uuidjs/uuid
- https://github.com/motdotla/dotenv
- https://github.com/jquense/yup

Typescript:

- https://www.typescriptlang.org/docs/
- https://github.com/wclr/ts-node-dev

Database and ORM:

- https://github.com/mapbox/node-sqlite3
- https://typeorm.io/#/
- https://www.beekeeperstudio.io/

Tests:

- https://jestjs.io/docs/en/getting-started
- https://github.com/visionmedia/supertest

Mailer:

- https://nodemailer.com/about/
- https://etherealjs.org/
- https://handlebarsjs.com/guide/
