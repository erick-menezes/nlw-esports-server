import express from 'express';

const app = express();

app.get('/ads', (request, response) => {
    response.send({ message: 'Acessou /adsssss!' })
});

app.listen(3333, () => console.log('Server listening on port 3333!'));