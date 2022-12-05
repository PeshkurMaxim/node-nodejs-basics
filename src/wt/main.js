import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { dirname } from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const performCalculations = async () => {

    const arResult = [];

    const workerResult = (data) => {
        for (const workerResult of data) {
            if (workerResult.status == 'fulfilled') {
                arResult.push(workerResult.value);
            }

            if (workerResult.status == "rejected") {
                arResult.push({
                    status: 'error',
                    data: null
                });
            }
        }

        console.log(arResult);
    }

    let promises = [];

    for (let i = 0; i < cpus().length; i++) {

        promises.push(
            new Promise((resolve, reject) => {
                const worker = new Worker(__dirname + '/worker.js', {workerData: i + 10});
                worker.on('message', resolve);
                worker.on('error', reject);
                worker.on('exit', (code) => {
                    if (code !== 0)
                        reject(new Error(`Worker stopped with exit code ${code}`));
                })     
            })
        )
    }

    Promise.allSettled(promises).then(workerResult);
};

await performCalculations();