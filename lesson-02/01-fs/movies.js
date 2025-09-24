import * as fs from 'node:fs/promises';

export function readMovies() {
    return fs.readFile("movies.txt", { encoding: "utf-8" });


}