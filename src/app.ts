import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import config from './config';
import apiRouter from './routes/api.routes';

const app = express();
const swaggerDocs = swaggerJSDoc(config.swaggerOptions);

app.use('/api', apiRouter);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export default app;