import { createReadStream } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const read = async () => {

    const rs = createReadStream(__dirname + '/files/fileToRead.txt');

    rs.pipe(process.stdout);

};

await read();