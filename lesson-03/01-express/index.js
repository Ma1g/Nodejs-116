import express from 'express';

const app = express();

app.listen(8080, (error) => { // 1500+
    if (error) {
        throw error;
    }

    console.log('Server started on port 8080');
});