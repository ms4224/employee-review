import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { employeeRouter } from './routes/employee.routes';
import { reviewRouter } from './routes/review.routes';

const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'static')));
app.use('/api', employeeRouter);
app.use('/api', reviewRouter);
//to use angular app routing
app.use('/*', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})