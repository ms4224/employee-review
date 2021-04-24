import express from 'express';
import path from 'path';
import { employeeRouter } from './routes/employee.routes';

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'static')));
app.use('/api', employeeRouter);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})