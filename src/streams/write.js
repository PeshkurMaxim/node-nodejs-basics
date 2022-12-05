import { createWriteStream } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const write = async () => {

    const ws = createWriteStream(__dirname + '/files/fileToWrite.txt');

    process.stdin.pipe(ws);

};

await write();