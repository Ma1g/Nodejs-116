import * as fs from 'node:fs/promises';
import {fileURLToPath } from 'node:url';
import path from 'node:path';

export function readMovies() {

    //work in Node.js v < 22
    // const dirname = path.dirname(fileURLToPath(import.meta.url));
    // const filePath = path.join(dirname, "movies.txt");

    //work in Node.js v >= 22
    const dirname = import.meta.dirname
    const filePath = path.join(dirname, "movies.txt");

    dirname + '/movies.txt'
    
    // const filePath = path.resolve("movies", "movies.txt");

    return fs.readFile(filePath, { encoding: "utf-8" });
}