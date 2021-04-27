"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeRouter = void 0;
const express_1 = require("express");
const employeeQueries = __importStar(require("../lib/employee.queries"));
exports.employeeRouter = express_1.Router();
exports.employeeRouter.get('/employee', (req, res) => {
    employeeQueries.getEmployees()
        .then(employees => res.status(200).send(employees))
        .catch(err => res.status(400).send(err));
});
exports.employeeRouter.post('/employee', (req, res) => {
    employeeQueries.addEmployee(req.body.firstName, req.body.lastName)
        .then(() => res.status(200).send())
        .catch(err => res.status(400).send(err));
});
exports.employeeRouter.delete('/employee/:lastName', (req, res) => {
    employeeQueries.removeEmployee(req.params.lastName)
        .then(() => res.status(200).send())
        .catch(err => res.status(400).send(err));
});
exports.employeeRouter.put('/employee/:lastName', (req, res) => {
    employeeQueries.updateEmployee(req.params.lastName, req.body.newFirstName, req.body.newLastName)
        .then(() => res.status(200).send())
        .catch(err => res.status(400).send(err));
});
//# sourceMappingURL=employee.routes.js.map