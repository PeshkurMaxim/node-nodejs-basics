import { createGzip } from 'zlib'
import { createWriteStream, createReadStream } from 'fs'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream';

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const compress = async () => {

    const rs = createReadStream(__dirname + '/files/fileToCompress.txt');
    const ws = createWriteStream(__dirname + '/files/archive.gz');
    const compresser = createGzip();
    
    pipeline(
        rs,
        compresser, 
        ws,
        (err) => {
            if (err !== undefined) throw err;
        }
    )

};

await compress();