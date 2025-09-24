import { readMovies } from "./movies.js"; 

async function main() {
    const movies = await readMovies();
    console.log(movies)
}

main().catch(error => console.error(error))