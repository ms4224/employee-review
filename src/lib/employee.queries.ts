import { runQuery } from "./postgrePoolConnector";

export function getEmployees(): Promise<IEmployee[]> {
    const queryString = `Select * from employees`;
    return runQuery<IEmployee>(queryString);
}

export function addEmployee(firstName: string, lastName: string): Promise<any[]> {
    const queryString = `insert into employees values ('${firstName}', '${lastName}');`;
    return runQuery(queryString);
}

export function removeEmployee(lastName: string): Promise<any[]> {
    const queryString = `delete from employees where lastName='${lastName}');`;
    return runQuery(queryString);
}

export function updateEmployee(lastName: string, newFirstName: string, newLastName: string): Promise<any[]> {
    const queryString = `update employees set lastName = '${newLastName}', firstName = '${newFirstName}' where lastName = '${lastName}';`;
    return runQuery(queryString);
}