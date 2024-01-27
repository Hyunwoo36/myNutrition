const express = require('express');
const next = require('next');

const testRoute = require('./api/test.js');


const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.use('/api', testRoute);

    server.all('*', (req, res) => {
        return handle(req, res);
    });

    const PORT = process.env.PORT || 3000;
    server.listen(PORT, (err) => {
        if (err) throw err;
        console.log(`Nutrion server opened at http://localhost:${PORT}`);
    });
}).catch(ex => {
    console.error(ex.stack);
    process.exit(1);
});