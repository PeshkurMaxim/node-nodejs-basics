import { createUnzip } from 'zlib'
import { createWriteStream, createReadStream } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream';

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const decompress = async () => {

    const rs = createReadStream(__dirname + '/files/archive.gz');
    const ws = createWriteStream(__dirname + '/files/fileToCompress.txt');
    const decompresser = createUnzip();

    pipeline(
        rs,
        decompresser, 
        ws,
        (err) => {
            if (err !== undefined) throw err;
        }
    )
};

await decompress();