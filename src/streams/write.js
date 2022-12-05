import { createWriteStream } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream';

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const write = async () => {

    const ws = createWriteStream(__dirname + '/files/fileToWrite.txt');

    pipeline(
        process.stdin, 
        ws,
        (err) => {
            if (err !== undefined) throw err;
        }
    )

};

await write();