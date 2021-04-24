import {Router} from 'express';
import * as employeeQueries from '../lib/employee.queries';

export const employeeRouter = Router();

employeeRouter.get('/employee', (req, res) => {
    employeeQueries.getEmployees()
        .then(employees => {
            res.status(200);
            res.send(employees)
        })
        .catch(err => {
            res.status(400);
            res.send(err);
        })
});