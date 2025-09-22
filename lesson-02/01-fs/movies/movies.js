import path from "node:path";
import * as fs from 'node:fs/promises';

export function readMovies() {
    const filePath = path.resolve("movies", "movies.txt");
    return fs.readFile(filePath, { encoding: "utf-8" });
}