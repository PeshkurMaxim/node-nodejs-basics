import {writeFile} from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const create = async () => {

    console.log(__dirname);

    writeFile(__dirname + "/files/fresh.txt", "I am fresh and young", (error) => {
        if (error) throw new Error('FS operation failed');
        console.log('File writed');

    })
    
};

await create();