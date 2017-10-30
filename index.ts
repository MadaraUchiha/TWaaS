import * as express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.writeHead(200);
    res.end('Hello World!!!');
})

app.listen(8080);
