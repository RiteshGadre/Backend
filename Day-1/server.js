const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Hello, World!!!')
})     // Server create ho gaya hain

server.listen(3000, () => {
    console.log('Server is running on port 300');
});