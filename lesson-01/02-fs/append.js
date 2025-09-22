import fs from 'node:fs/promises';

fs.appendFile("append.txt", "Appended content!\n")
    .then(() => console.log("OK"))
    .catch(error => console.error(error));