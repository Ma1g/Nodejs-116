// import * as fs from 'node:fs/promises';

// fs.readFile("movies.txt", { encoding: "utf-8" })
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

import { readMovies } from "./movies/movies.js"

async function main() {
    const movies = await readMovies();
    console.log(movies)
}

main().catch(error => console.error(error))