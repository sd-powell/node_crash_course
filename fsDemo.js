// import fs from 'fs';
import fs from 'fs/promises';

// readFile() - callback
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// readFileSync() - synchronous version
// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log(data);

// readFile() - promise version .then()
// fs.readFile('./test.txt', 'utf8')
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));

// readFile() - async/await version
const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf8');
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

// writeFile() - async/await version
const writeFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'Hello, World!', 'utf8');
        console.log('File written successfully');
    } catch (error) {
        console.error(error);
    }
};

// appendFile() - async/await version
const appendFile = async () => {
    try {
        await fs.appendFile('./test.txt', '\nThis is appended text.', 'utf8');
        console.log('File appended successfully');
    } catch (error) {
        console.error(error);
    }
};

writeFile();
appendFile();
readFile();