import { copyFile, constants, readdir, mkdir } from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const copy = async () => {
    // Write your code here 
    readdir(__dirname + '/files', (error, files) => {
        if (error) throw new Error('FS operation failed');

        mkdir(__dirname + '/files_copy', (error, path) => {
            if (error) throw new Error('FS operation failed');

            files.forEach(fileName => {
                copyFile(__dirname + '/files/' + fileName, __dirname + "/files_copy/" + fileName, constants.COPYFILE_EXCL, (error) => {
                    if (error) throw new Error('FS operation failed');

                })
            });
        })  
    })
};

copy();