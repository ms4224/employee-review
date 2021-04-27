"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const employee_routes_1 = require("./routes/employee.routes");
const review_routes_1 = require("./routes/review.routes");
const PORT = process.env.PORT || 3000;
const app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, 'static')));
app.use('/api', employee_routes_1.employeeRouter);
app.use('/api', review_routes_1.reviewRouter);
//to use angular app routing
app.use('/*', (req, res) => {
    res.sendFile(__dirname + '/static/index.html');
});
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map