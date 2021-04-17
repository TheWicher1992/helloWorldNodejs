const http = require('http')

http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('<h1>Hello World!</h2>')
    }
}).listen(5000)
