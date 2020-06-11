import 'reflect-metadata'
import express from 'express';
import routes from './routes';
import '@shared/infra/typeorm';
import uploadConfig from '@config/upload';
const app = express();
import AppErrpr from '@shared/errors/AppError';
import '@modules/appointments/repositories/AppointmentsRepository';

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.get('/', (request, response)=>{
  return response.json({ message: 'hello world'})
})

app.listen(3333, ()=> {
  console.log('☯')
});




