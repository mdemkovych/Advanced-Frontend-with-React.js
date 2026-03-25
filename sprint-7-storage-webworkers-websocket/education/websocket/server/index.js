import {WebSocketServer} from 'ws';

const socketServer = new WebSocketServer({port: 8080});

socketServer.on('connection', connection => {
    console.log('New connection');

    connection.on('message', message => {
        const msg = typeof message === 'string' ? message : message.toString();
        console.log('Received message from client:', msg);
        connection.send(`Hello from server! I have received your message: ${msg}`);
    })

    connection.on('close', () => {
        console.log('Connection closed');
    })
})