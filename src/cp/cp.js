import { fork } from 'child_process';
import { dirname } from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {

    const childProcess = fork(__dirname + '/files/script.js', process.argv.slice(2), {silent: true});

    process.stdin.pipe(childProcess.stdin);

    childProcess.stdout.pipe(process.stdout);

};

spawnChildProcess();