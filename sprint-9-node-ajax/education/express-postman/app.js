import express from 'express';
import {products} from './data.js';

const app = express();

app.use(express.json());

app.get('/products', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: { products }
    });
});

app.get('/products/:id', (req, res) => {
    const indexToGet = products.findIndex(
        (product) => product.id === +req.params.id
    );

    if (indexToGet === -1) {
        req.status(404).json({
            status: 'not found'
        });
    }

    res.status(200).json({
        status: 'success',
        data: { products: products[indexToGet] }
    });
});

app.post('/products', (req, res) => {
    const newId = products[products.length - 1].id + 1;

    const newProduct = Object.assign({ id: newId }, req.body);

    products.push(newProduct);
    res.status(201).json({
        status: 'success',
        data: { products: newProduct }
    });
});

app.delete('/products/:id', (req, res) => {
    const indexToDelete = products.findIndex(
        (product) => product.id === +req.params.id
    );

    if (indexToDelete === -1) {
        req.status(404).json({
            status: 'not found'
        });
    }

    products.splice(indexToDelete, 1);
    res.status(204).json({
        status: 'success'
    })
})

app.put('/products/:id', (req, res) => {
    const indexToUpdate = products.findIndex(
        (product) => product.id === +req.params.id
    );

    if (indexToUpdate === -1) {
        req.status(404).json({
            status: 'not found'
        })
    }

    const updatedProduct = Object.assign({ id: req.params.id }, req.body);
    products.splice(indexToUpdate, 0, updatedProduct);
    res.status(204).json({
        status: 'success',
        data: { products: updatedProduct }
    })
})

app.get('/users', (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not implemented yet'
    })
})

app.post('/users', (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not implemented yet'
    })
})

app.get('/users/:id', (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not implemented yet'
    })
})

app.delete('/users/:id', (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not implemented yet'
    })
})

app.listen(3000);