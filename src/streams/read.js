import { createReadStream } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream';

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const read = async () => {

    const rs = createReadStream(__dirname + '/files/fileToRead.txt');

    pipeline(
        rs, 
        process.stdout,
        (err) => {
            if (err !== undefined) throw err;
        }
    )

};

await read();