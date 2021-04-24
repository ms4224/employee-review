import express from 'express';
import path from 'path';
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'static')));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})