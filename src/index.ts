import express from 'express';
import path from 'path';
const app = express();
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'static')));

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})