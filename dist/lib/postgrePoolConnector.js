"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runQuery = void 0;
const pg_1 = require("pg");
//to allow local use
const connectionURL = `postgres://beobnflbcbzwcs:5302d50b288d551d1adeb1f1e95dfd201a11e91e07b942106f911bbc00a7e22a@ec2-54-167-152-185.compute-1.amazonaws.com:5432/d87d63kpujad1q`;
function runQuery(queryString) {
    return new Promise((resolve, reject) => {
        const client = new pg_1.Client({
            connectionString: process.env.DATABASE_URL || connectionURL,
            ssl: { rejectUnauthorized: false }
        });
        client.connect().then((res) => {
            client.query(queryString, [], (err, result) => {
                if (err)
                    reject(err);
                else
                    resolve(result === null || result === void 0 ? void 0 : result.rows);
                client.end();
            });
        }).catch(err => reject(err));
    });
}
exports.runQuery = runQuery;
//# sourceMappingURL=postgrePoolConnector.js.map