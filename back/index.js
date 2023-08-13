require('dotenv').config({
    path: process.env.ENV_PATH === undefined ? '.env' : process.env.ENV_PATH
});

const app = require('./app')

const http = require('http')

const port = process.env.PORT || 5000

const server = http.createServer(app)

server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server is running at localhost:${port} in ${app.get("env")} mode`)
})