import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    try {
        //check if GET request
        if (req.method === 'GET') {
            if (req.url === '/') {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end('<h1>Homepage</h1>');
            } else if (req.url === '/about') {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end('<h1>About</h1>');
            } else {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 Not Found</h1>');
            }
        } else {
            throw new Error('Method not allowed');
        }
    } catch (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Server Error');
    }

    // if (req.url === '/') {
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.end('<h1>Homepage</h1>');
    // } else if (req.url === '/about') {
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.end('<h1>About</h1>');
    // } else {
    //     res.writeHead(404, { 'Content-Type': 'text/html' });
    //     res.end('<h1>404 Not Found</h1>');
    // }
    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;

    // res.writeHead(500, { 'Content-Type': 'application/json' });
    // res.end(JSON.stringify({ message: 'Internal Server Error' }));
    // console.log(req.url);
    // console.log(req.method);

    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.end('<h1>Hello, World!</h1>');
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});