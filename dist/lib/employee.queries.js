"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEmployee = exports.removeEmployee = exports.addEmployee = exports.getEmployees = void 0;
const postgrePoolConnector_1 = require("./postgrePoolConnector");
function getEmployees() {
    const queryString = `Select * from employees`;
    return postgrePoolConnector_1.runQuery(queryString);
}
exports.getEmployees = getEmployees;
function addEmployee(firstName, lastName) {
    const queryString = `insert into employees values ('${firstName}', '${lastName}');`;
    return postgrePoolConnector_1.runQuery(queryString);
}
exports.addEmployee = addEmployee;
function removeEmployee(lastName) {
    const queryString = `delete from employees where lastName='${lastName}');`;
    return postgrePoolConnector_1.runQuery(queryString);
}
exports.removeEmployee = removeEmployee;
function updateEmployee(lastName, newFirstName, newLastName) {
    const queryString = `update employees set lastName = '${newLastName}', firstName = '${newFirstName}' where lastName = '${lastName}';`;
    return postgrePoolConnector_1.runQuery(queryString);
}
exports.updateEmployee = updateEmployee;
//# sourceMappingURL=employee.queries.js.map