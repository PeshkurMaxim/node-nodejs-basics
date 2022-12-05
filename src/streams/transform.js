import { Transform, pipeline } from 'stream'

const transform = async () => {

    const transform = new Transform({
        transform(chunk, enc, callback) {
            const inputStr = chunk.toString().trim()
            const reverseStr = inputStr.split('').reverse().join('');
            callback(null, reverseStr + '\n');
        }
    })

    pipeline(process.stdin, transform, process.stdout, (err) => {throw err});

};

await transform();