import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


const rename = async () => {
    // Write your code here 
    
    fs.rename(__dirname + '/files/wrongFilename.txt', __dirname + '/files/properFilename.md', (error) => {
        if (error) throw new Error('FS operation failed');
    })
};

await rename();