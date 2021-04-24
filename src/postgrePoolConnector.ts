
import { Pool, QueryArrayResult } from 'pg';
const connectionURL = `postgres://beobnflbcbzwcs:5302d50b288d551d1adeb1f1e95dfd201a11e91e07b942106f911bbc00a7e22a@ec2-54-167-152-185.compute-1.amazonaws.com:5432/d87d63kpujad1q`;


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
})

// the pool with emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

// callback - checkout a client
export function executeQuery(queryString: string): Promise<any> {
  return new Promise(
    (resolve, reject) => {
      pool.connect((err, client, done) => {
        if (err) reject(err);
        console.log(client);
        client.query(queryString, (err, res: QueryArrayResult<any[]>) => {
          done()
          if (err) {
            reject (err);
          }
          resolve(res.rows)
        })
      })
    }
  )
}