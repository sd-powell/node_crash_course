import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const PORT = process.env.PORT;

// Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
    try {
        //check if GET request
        if (req.method === 'GET') {
            let filepath; 
            if (req.url === '/') {
                filepath = path.join(__dirname, 'public', 'index.html');
            } else if (req.url === '/about') {
                filepath = path.join(__dirname, 'public', 'about.html');
            } else {
                throw new Error('Not Found');
            }

            const data = await fs.readFile(filepath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
        } else {
            throw new Error('Method not allowed');
        }
    } catch (error) {

    }


// const server = http.createServer((req, res) => {
//     try {
//         //check if GET request
//         if (req.method === 'GET') {
//             if (req.url === '/') {
//                 res.writeHead(200, { 'Content-Type': 'text/html' });
//                 res.end('<h1>Homepage</h1>');
//             } else if (req.url === '/about') {
//                 res.writeHead(200, { 'Content-Type': 'text/html' });
//                 res.end('<h1>About</h1>');
//             } else {
//                 res.writeHead(404, { 'Content-Type': 'text/html' });
//                 res.end('<h1>404 Not Found</h1>');
//             }
//         } else {
//             throw new Error('Method not allowed');
//         }
//     } catch (error) {
//             res.writeHead(500, { 'Content-Type': 'text/plain' });
//             res.end('Server Error');
//     }

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