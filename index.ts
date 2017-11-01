import * as express from 'express';
import { Client } from 'pg';

const app = express();

app.get('/', async (req, res) => {
    const client = new Client({connectionString: process.env.DATABASE_URL});
    await client.connect();

    const pgRes = await client.query('SELECT $1::text as message', ['Hello world!'])
    await client.end()

    res.writeHead(200);
    res.end(pgRes.rows[0].message);
})

app.listen(8080);
