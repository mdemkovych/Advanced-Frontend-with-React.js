self.onmessage = (data) => {
    if (data.data.type === 'command') {
        console.log(data)
        let count = 0;
        const now = performance.now();
        for (let i = 0; i < 10000000000; i++) {count++}

        console.log(`Count: ${count} Time: ${performance.now() - now} ms`);
    }
}