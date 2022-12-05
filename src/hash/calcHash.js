import { createReadStream } from 'fs';
import { pipeline } from 'stream';
import { createHash } from 'crypto';
import { dirname } from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);


const calculateHash = async () => {

    const rs = createReadStream(__dirname + '/files/fileToCalculateHashFor.txt');
    const hash = createHash('sha256').setEncoding('hex');

    pipeline(
        rs, 
        hash,
        process.stdout,
        (err) => {
            if (err !== undefined) throw err;
        }
    )
};

await calculateHash();