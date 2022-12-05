import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const read = async () => {
    fs.readFile(__dirname + '/files/fileToRead.txt', (error, data) => {
        console.log(data.toString());
    })
};

await read();