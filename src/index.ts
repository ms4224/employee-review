import express from 'express';
import path from 'path';
import { executeQuery } from './postgrePoolConnector';
const app = express();
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'static')));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

executeQuery('Select * from decks').then((res) => console.log(res), (fail) => console.log(fail));