const client = new WebSocket('ws://localhost:8080');

client.onopen = () => {
    console.log('Connected');

    client.send('Hello, server!');
}

client.onmessage = ({data}) => {
    console.log(data);
}