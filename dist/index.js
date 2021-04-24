"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const postgrePoolConnector_1 = require("./postgrePoolConnector");
const app = express_1.default();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.static(path_1.default.join(__dirname, 'static')));
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
postgrePoolConnector_1.runQuery('Select * from decks').then((res) => console.log(res), (fail) => console.log(fail));
//# sourceMappingURL=index.js.map