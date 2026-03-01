import dotenv from 'dotenv';

dotenv.config();

export default {
  mysql: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  },
//   jwt: {
//     secretKey: process.env.JWT_SERVICE,
//   },
  bcyrpt: {
    numberOfSaltRounds: 8,
  },
  swaggerOptions: {
    apis: ['./src/routes/*.routes.ts'],
    swaggerDefinition: {
      info: {
        title: 'Mushroom Collector API',
        version: '1.0.0',
        description: 'Mushroom Collector API information',
        contact: {
          name: 'Flomm',
        },
      },
      securityDefinitions: {
        Bearer: {
          type: 'apiKey',
          name: 'Authorization',
          in: 'body',
          description: 'Token from LOGIN API in Bearer TOKEN format',
        },
      },
    },
  },
};