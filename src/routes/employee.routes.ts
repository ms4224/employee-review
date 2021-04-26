import {Router} from 'express';
import * as employeeQueries from '../lib/employee.queries';

export const employeeRouter = Router();

employeeRouter.get('/employee', (req, res) => {
    employeeQueries.getEmployees()
        .then(employees => res.status(200).send(employees))
        .catch(err => res.status(400).send(err));
});

employeeRouter.post('/employee', (req, res) => {
    employeeQueries.addEmployee(req.body.firstName, req.body.lastName)
        .then(() => res.status(200).send())
        .catch(err => res.status(400).send(err));
});

employeeRouter.delete('/employee/:lastName', (req, res) => {
    employeeQueries.removeEmployee(<string>req.params.lastName)
        .then(() => res.status(200).send())
        .catch(err => res.status(400).send(err));
});

employeeRouter.put('/employee/:lastName', (req, res) => {
    employeeQueries.updateEmployee(<string>req.params.lastName, req.body.newFirstName, req.body.newLastName)
        .then(() => res.status(200).send())
        .catch(err => res.status(400).send(err));
});