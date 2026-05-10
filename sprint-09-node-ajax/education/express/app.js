import express from 'express';

// express is a function that returns an obj
const app = express();

app.use(express.static('assets'));
app.use((req, res, next) => {
    console.log('We received a request', req.method, req.url);
    // res.send('Answer from server');
    // throw Error('Something went wrong');
    next(); // middleware chaining
})

app.get('/', (req, res) => {
    res.send('Answer from server');
})

app.get('/about', (req, res) => {
    res.send('Answer from server ABOUT');
})

app.get('/params/:id/:name', (req, res) => {
    console.log('id = ', req.params.id);
    console.log('name = ', req.params.name);
    res.send('Answer from server PARAMS');
})

app.use((error, req, res, next) => {
    res.send('Something went wrong')
})

app.listen(3000);

