import {readdir} from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const list = async () => {
    // Write your code here 

    readdir(__dirname + '/files', (error, files) => {
        if (error) throw new Error('FS operation failed');

        files.forEach(fileName => {
            console.log(fileName);
        });
    })
};

await list();